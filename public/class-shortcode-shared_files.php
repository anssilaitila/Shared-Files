<?php

class ShortcodeSharedFiles
{
    /**
     * Search view embeddable via shortcode.
     *
     * @since    1.0.0
     */
    public static function shared_files( $atts = array(), $content = null, $tag = '' )
    {
        $post_id = intval( get_the_id() );
        // normalize attribute keys, lowercase
        $atts = array_change_key_case( (array) $atts, CASE_LOWER );
        $s = get_option( 'shared_files_settings' );
        $embed_id = ( isset( $atts['embed_id'] ) ? sanitize_title( $atts['embed_id'] ) : 'default' );
        $pagination_active = 0;
        if ( isset( $_GET['_paged'] ) && $_GET['_paged'] == $embed_id ) {
            $pagination_active = 1;
        }
        $tag_slug = '';
        if ( isset( $_GET['sf_tag'] ) && $_GET['sf_tag'] != '0' ) {
            $tag_slug = sanitize_title( $_GET['sf_tag'] );
        }
        $limit_posts = 0;
        $meta_query_hide_not_public = array(
            'relation' => 'OR',
        );
        $meta_query_hide_not_public[] = array(
            'key'     => '_sf_not_public',
            'compare' => '=',
            'value'   => '',
        );
        $meta_query_hide_not_public[] = array(
            'key'     => '_sf_not_public',
            'compare' => 'NOT EXISTS',
        );
        //    $meta_query_hide_not_public = array();
        $html = '';
        
        if ( isset( $_GET ) && isset( $_GET['shared-files-update'] ) ) {
            $html .= '<div class="shared-files-upload-complete">' . esc_html__( 'File successfully updated.', 'shared-files' ) . '</div>';
        } elseif ( isset( $_GET ) && isset( $_GET['_sf_delete_editable_file'] ) && isset( $_GET['sc'] ) ) {
            $html .= '<div class="shared-files-file-deleted">' . esc_html__( 'File successfully deleted.', 'shared-files' ) . '</div>';
        }
        
        
        if ( isset( $atts['file_upload'] ) && (is_user_logged_in() || !isset( $s['only_logged_in_users_can_add_files'] )) ) {
            
            if ( isset( $atts['only_uploaded_files'] ) ) {
                $meta_query_hide_not_public = array(
                    'relation' => 'AND',
                );
                $meta_query_hide_not_public[] = array(
                    'key'     => '_sf_embed_post_id',
                    'compare' => '=',
                    'value'   => $post_id,
                );
                $meta_query_hide_not_public[] = array(
                    'key'     => '_sf_not_public',
                    'compare' => 'EXISTS',
                );
            } else {
                $meta_query_hide_not_public = array(
                    'relation' => 'OR',
                );
                $meta_query_hide_not_public[] = array(
                    'key'     => '_sf_embed_post_id',
                    'compare' => '=',
                    'value'   => $post_id,
                );
                $meta_query_hide_not_public[] = array(
                    'key'     => '_sf_not_public',
                    'compare' => '=',
                    'value'   => '',
                );
                $meta_query_hide_not_public[] = array(
                    'key'     => '_sf_not_public',
                    'compare' => 'NOT EXISTS',
                );
            }
            
            $html .= SharedFilesFileUpload::fileUploadMarkup( $atts );
        }
        
        
        if ( isset( $atts['file_id'] ) ) {
            if ( SharedFilesHelpers::isPremium() == 0 ) {
                $html = SharedFilesPublicHelpers::proFeaturePublicMarkup();
            }
            return $html;
        } elseif ( isset( $atts['hide_file_list'] ) ) {
            return $html;
        } else {
            $layout = SharedFilesHelpers::getLayout( $s, $atts );
            $html .= SharedFilesHelpers::initLayout( $s );
            $type = 'basic';
            if ( isset( $atts['category'] ) ) {
                $type = 'category';
            }
            $container_embed_id = '';
            
            if ( $embed_id == 'default' ) {
                $container_embed_id = 'id="' . esc_attr( 'shared-files-default' ) . '"';
            } elseif ( $embed_id ) {
                $container_embed_id = 'id="' . esc_attr( $embed_id ) . '"';
            }
            
            $html .= '<div ' . $container_embed_id . ' class="shared-files-container shared-files-type-' . $type . ' ' . (( $layout ? 'shared-files-' . esc_attr( $layout ) : '' )) . '">';
            $html .= '<div id="shared-files-search">';
            $is_premium = 0;
            
            if ( isset( $atts['category'] ) ) {
                
                if ( SharedFilesHelpers::isPremium() == 0 ) {
                    $html = SharedFilesPublicHelpers::proFeaturePublicMarkup();
                    return $html;
                }
            
            } else {
                
                if ( isset( $_GET['sf_category'] ) && $_GET['sf_category'] != '0' ) {
                    $term_slug = sanitize_title( $_GET['sf_category'] );
                    $wpb_all_query = new WP_Query( array(
                        'post_type'      => 'shared_file',
                        'post_status'    => 'publish',
                        'posts_per_page' => -1,
                        'tag'            => $tag_slug,
                        'tax_query'      => array( array(
                        'taxonomy'         => 'shared-file-category',
                        'field'            => 'slug',
                        'terms'            => $term_slug,
                        'include_children' => true,
                    ) ),
                        'orderby'        => SharedFilesHelpers::getOrderBy( $atts ),
                        'order'          => SharedFilesHelpers::getOrder( $atts ),
                        'meta_key'       => SharedFilesHelpers::getMetaKey( $atts ),
                        'meta_query'     => $meta_query_hide_not_public,
                    ) );
                    $wpb_all_query_all_files = new WP_Query( array(
                        'post_type'      => 'shared_file',
                        'post_status'    => 'publish',
                        'posts_per_page' => -1,
                        'tax_query'      => array( array(
                        'taxonomy'         => 'shared-file-category',
                        'field'            => 'slug',
                        'terms'            => $term_slug,
                        'include_children' => true,
                    ) ),
                        'orderby'        => SharedFilesHelpers::getOrderBy( $atts ),
                        'order'          => SharedFilesHelpers::getOrder( $atts ),
                        'meta_key'       => SharedFilesHelpers::getMetaKey( $atts ),
                        'meta_query'     => $meta_query_hide_not_public,
                    ) );
                } else {
                    
                    if ( isset( $_GET['c'] ) && $_GET['c'] != 'all_files' ) {
                        $term_slug = sanitize_title( $_GET['c'] );
                        $wpb_all_query = new WP_Query( array(
                            'post_type'      => 'shared_file',
                            'post_status'    => 'publish',
                            'posts_per_page' => -1,
                            'tag'            => $tag_slug,
                            'tax_query'      => array( array(
                            'taxonomy'         => 'shared-file-category',
                            'field'            => 'slug',
                            'terms'            => $term_slug,
                            'include_children' => true,
                        ) ),
                            'orderby'        => SharedFilesHelpers::getOrderBy( $atts ),
                            'order'          => SharedFilesHelpers::getOrder( $atts ),
                            'meta_key'       => SharedFilesHelpers::getMetaKey( $atts ),
                            'meta_query'     => $meta_query_hide_not_public,
                        ) );
                        $wpb_all_query_all_files = new WP_Query( array(
                            'post_type'      => 'shared_file',
                            'post_status'    => 'publish',
                            'posts_per_page' => -1,
                            'tax_query'      => array( array(
                            'taxonomy'         => 'shared-file-category',
                            'field'            => 'slug',
                            'terms'            => $term_slug,
                            'include_children' => true,
                        ) ),
                            'orderby'        => SharedFilesHelpers::getOrderBy( $atts ),
                            'order'          => SharedFilesHelpers::getOrder( $atts ),
                            'meta_key'       => SharedFilesHelpers::getMetaKey( $atts ),
                            'meta_query'     => $meta_query_hide_not_public,
                        ) );
                    } else {
                        $paged = 1;
                        if ( $pagination_active ) {
                            
                            if ( isset( $_GET['_page'] ) && $_GET['_page'] ) {
                                $paged = (int) $_GET['_page'];
                            } elseif ( get_query_var( 'paged' ) ) {
                                $paged = absint( get_query_var( 'paged' ) );
                            }
                        
                        }
                        $posts_per_page = ( isset( $s['pagination'] ) && $s['pagination'] ? (int) $s['pagination'] : 40 );
                        if ( $limit_posts ) {
                            $posts_per_page = $limit_posts;
                        }
                        $tax_query = [
                            'relation' => 'AND',
                        ];
                        $wpb_all_query = new WP_Query( array(
                            'post_type'      => 'shared_file',
                            'post_status'    => 'publish',
                            'paged'          => $paged,
                            'posts_per_page' => $posts_per_page,
                            'tag'            => $tag_slug,
                            'orderby'        => SharedFilesHelpers::getOrderBy( $atts ),
                            'order'          => SharedFilesHelpers::getOrder( $atts ),
                            'meta_key'       => SharedFilesHelpers::getMetaKey( $atts ),
                            'meta_query'     => $meta_query_hide_not_public,
                            'tax_query'      => $tax_query,
                        ) );
                        $wpb_all_query_all_files = new WP_Query( array(
                            'post_type'      => 'shared_file',
                            'post_status'    => 'publish',
                            'posts_per_page' => -1,
                            'orderby'        => SharedFilesHelpers::getOrderBy( $atts ),
                            'order'          => SharedFilesHelpers::getOrder( $atts ),
                            'meta_key'       => SharedFilesHelpers::getMetaKey( $atts ),
                            'meta_query'     => $meta_query_hide_not_public,
                            'tax_query'      => $tax_query,
                        ) );
                    }
                
                }
            
            }
            
            $filetypes = SharedFilesHelpers::getFiletypes();
            $external_filetypes = SharedFilesHelpers::getExternalFiletypes();
            $html .= '<div id="shared-files-files-found"></div>';
            $html .= '<span id="shared-files-one-file-found">' . esc_html__( 'file found.', 'shared-files' ) . '</span><span id="shared-files-more-than-one-file-found">' . esc_html__( 'files found.', 'shared-files' ) . '</span>';
            $hide_description = ( isset( $atts['hide_description'] ) ? $atts['hide_description'] : '' );
            /* CATEGORY PASSWORD END */
            if ( $tag_slug ) {
                $html .= SharedFilesHelpers::tagTitleMarkup( $tag_slug, 'shared-files-non-ajax', $hide_description );
            }
            
            if ( $wpb_all_query->have_posts() ) {
                $html .= '<ul id="myList" class="shared-files-ajax-list">';
                
                if ( isset( $atts['hide_files_first'] ) && !isset( $_GET ) ) {
                    // ...
                } else {
                    while ( $wpb_all_query->have_posts() ) {
                        $wpb_all_query->the_post();
                        $id = get_the_id();
                        $c = get_post_custom( $id );
                        $external_url = ( isset( $c['_sf_external_url'] ) ? $c['_sf_external_url'][0] : '' );
                        $filetype = '';
                        $imagefile = SharedFilesHelpers::getImageFile( $id, $external_url );
                        
                        if ( isset( $atts['file_upload'] ) ) {
                            $html .= SharedFilesPublicHelpers::fileListItem(
                                $c,
                                $imagefile,
                                $hide_description,
                                1,
                                $atts
                            );
                        } elseif ( isset( $atts['category'] ) ) {
                            $html .= SharedFilesPublicHelpers::fileListItem(
                                $c,
                                $imagefile,
                                $hide_description,
                                0,
                                $atts
                            );
                        } else {
                            $html .= SharedFilesPublicHelpers::fileListItem(
                                $c,
                                $imagefile,
                                $hide_description,
                                1,
                                $atts
                            );
                        }
                    
                    }
                }
                
                $html .= '</ul>';
            } elseif ( !isset( $atts['file_upload'] ) ) {
                $html .= '<ul id="myList" class="shared-files-ajax-list"><li>';
                $html .= '<div class="shared-files-files-not-found">' . esc_html__( 'No files found.', 'shared-files' ) . '</div>';
                $html .= '</li></ul>';
            }
            
            
            if ( !isset( $s['hide_search_form'] ) && !isset( $atts['hide_search_for_all_files'] ) ) {
                $show_tags = 0;
                if ( isset( $s['show_tags_on_search_results'] ) ) {
                    $show_tags = 1;
                }
                $html .= '<ul id="shared-files-all-files">';
                if ( isset( $wpb_all_query_all_files ) && $wpb_all_query_all_files->have_posts() ) {
                    while ( $wpb_all_query_all_files->have_posts() ) {
                        $wpb_all_query_all_files->the_post();
                        $id = get_the_id();
                        $c = get_post_custom( $id );
                        $external_url = ( isset( $c['_sf_external_url'] ) ? $c['_sf_external_url'][0] : '' );
                        $filetype = '';
                        $hide_description = ( isset( $atts['hide_description'] ) ? $atts['hide_description'] : '' );
                        $imagefile = SharedFilesHelpers::getImageFile( $id, $external_url );
                        $html .= SharedFilesPublicHelpers::fileListItem(
                            $c,
                            $imagefile,
                            $hide_description,
                            $show_tags,
                            $atts
                        );
                    }
                }
                $html .= '</ul>';
            }
            
            if ( !$limit_posts ) {
                $html .= SharedFilesPublicPagination::getPagination( $pagination_active, $wpb_all_query, $embed_id );
            }
            $html .= '<div id="shared-files-nothing-found">';
            $html .= esc_html__( 'No files found.', 'shared-files' );
            $html .= '</div>';
            $html .= '</div></div><hr class="clear" />';
            wp_reset_postdata();
            return $html;
        }
    
    }

}