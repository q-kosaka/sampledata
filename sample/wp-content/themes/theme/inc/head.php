  <?php
    $title = getting_title();
    $description = getting_description();
  ?>
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=yes">
  <title><?php echo $title; ?></title>
  <link rel="canonical" href="<?php echo (empty($_SERVER['HTTPS']) ? 'http://' : 'https://') . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];?>">
  <meta name="description" content="<?php echo $description; ?>" />
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css?<?php echo strtotime("now"); ?>">