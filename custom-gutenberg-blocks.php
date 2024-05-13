<?php

/**
 * @package Custom Gutenberg Blocks
 */
/*
Plugin Name: Custom Gutenberg Blocks
Plugin URI: https://github.com/moonbyt3/custom-gutenberg-blocks
Description: Plugin used to add and develop custom Gutenberg blocks.
Version: 1.0.0
Requires at least: 5.8
Requires PHP: 5.6.20
Author: Milorad Jekic
Author URI: https://github.com/moonbyt3/
License: GPLv2 or later
Text Domain: custom-gutenberg-blocks
*/

if (!function_exists('add_action')) {
    echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
    exit;
}

define('PLUGIN_URL', plugin_dir_url(__FILE__));
define('PLUGIN_PATH', plugin_dir_path(__FILE__));

require_once plugin_dir_path(__FILE__) . 'plugin.php';
require_once plugin_dir_path(__FILE__) . 'src/blocks/example/block.php';

new Gutenberg_Plugin();

new Example_Block();
