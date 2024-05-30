<?php

class Gutenberg_Plugin {
    public function __construct() {
        add_action('enqueue_block_assets', [$this, 'enqueue_plugin_scripts']);
    }

    public function enqueue_plugin_scripts() {
        $asset_file = include(PLUGIN_PATH . 'build/index.asset.php');

        wp_register_script(
            'custom-gutenberg-js',
            PLUGIN_URL . 'build/index.js',
            $asset_file['dependencies'],
            $asset_file['version']
        );
        wp_enqueue_style('custom-gutenberg-css', PLUGIN_URL . 'build/style-index.css');
    }
}
