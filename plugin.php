<?php

class Gutenberg_Plugin {
    public function __construct() {
        add_action('enqueue_block_assets', [$this, 'enqueue_plugin_scripts']);
    }

    public function enqueue_plugin_scripts() {
        $script_asset = include PLUGIN_PATH . 'build/index.asset.php';

        wp_register_script(
            'custom-gutenberg-js',
            PLUGIN_URL . 'build/index.js',
            $script_asset['dependencies'],
            $script_asset['version']
        );
        wp_enqueue_style('custom-gutenberg-css', PLUGIN_URL . 'build/style-index.css');
    }
}
