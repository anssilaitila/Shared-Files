<?php

class ShortcodeSharedFilesSearch
{
    public static function shared_files_search( $atts = array(), $content = null, $tag = '' )
    {
        
        if ( SharedFilesHelpers::isPremium() == 0 ) {
            $html = SharedFilesPublicHelpers::sfProFeaturePublicMarkup();
            return $html;
        }
    
    }

}