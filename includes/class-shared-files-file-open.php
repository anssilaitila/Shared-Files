<?php

class SharedFilesFileOpen {

  public static function getUpdatedPathAndFilename($filename_with_path = '') {
  
    $wp_theme_dir = get_template_directory();
    $parts = explode('/', $wp_theme_dir);
  
    $parts_spliced = array_splice($parts, -2);
    
    $filename_parts = parse_url($filename_with_path);
    
    if (isset($filename_parts['path'])) {
      $filename_path_parts = explode('/', $filename_parts['path']);
    }
    
    $filename_path_parts_sliced = array_slice($filename_path_parts, -3, 3);
    
    if (is_array($filename_path_parts_sliced) && $filename_path_parts_sliced[0] == 'uploads') {
      \array_splice($filename_path_parts_sliced, 0, 1);
    }
    
    $final_path_and_filename = implode('/', $parts) . '/uploads/' . implode('/', $filename_path_parts_sliced);
  
    if (!file_exists($final_path_and_filename)) {
      $final_path_and_filename = self::getUpdatedPathAndFilenameV2($filename_with_path);
    }
      
    return $final_path_and_filename;
  }

  public static function getUpdatedPathAndFilenameV2($filename_with_path = '') {
  
    $wp_upload_dir = wp_upload_dir();
    $filename_parts = parse_url($filename_with_path);
    
    if (isset($filename_parts['path'])) {
      $filename_path_parts = explode('/', $filename_parts['path']);
    }
    
    $filename_path_parts_sliced = array_slice($filename_path_parts, -3, 3);
    
    if (is_array($filename_path_parts_sliced) && $filename_path_parts_sliced[0] == 'uploads') {
      \array_splice($filename_path_parts_sliced, 0, 1);
    }
        
    $final_path_and_filename = $wp_upload_dir['basedir'] . '/' . implode('/', $filename_path_parts_sliced);
  
    return $final_path_and_filename;
  }

  public static function getUpdatedPathAndFilenameOnDisk($filename_with_path = '') {
  
    $wp_theme_dir = get_template_directory();
    $parts = explode('/', $wp_theme_dir);
  
    $parts_spliced = array_splice($parts, -2);
    
    $filename_parts = parse_url($filename_with_path);
    
    if (isset($filename_parts['path'])) {
      $filename_path_parts = explode('/', $filename_parts['path']);
    }
    
    $filename_path_parts_sliced = array_slice($filename_path_parts, -3, 3);
    
    if (is_array($filename_path_parts_sliced) && $filename_path_parts_sliced[0] == 'uploads') {
      \array_splice($filename_path_parts_sliced, 0, 1);
    }
    
    $final_path_and_filename = implode('/', $parts) . '/uploads/' . implode('/', $filename_path_parts_sliced);
  
    return $final_path_and_filename;
  }

}