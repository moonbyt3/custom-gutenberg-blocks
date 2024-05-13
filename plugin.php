<?php

class Gutenberg_Plugin {
    public function __construct() {
        add_action('enqueue_block_assets', [$this, 'enqueue_plugin_scripts']);
    }

    public function enqueue_plugin_scripts() {
        wp_register_script(
            'custom-gutenberg-js',
            PLUGIN_URL . 'build/index.js',
            ['wp-blocks', 'wp-element', 'wp-editor', 'wp-polyfill']
        );
        wp_enqueue_style('custom-gutenberg-css', PLUGIN_URL . 'build/index.css');
    }
}
