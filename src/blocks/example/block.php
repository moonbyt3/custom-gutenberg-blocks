<?php
class Example_Block {
    public function __construct() {
        add_action('init', array($this, 'register_example_block'));
    }

    public function register_example_block() {
        if (!function_exists('register_block_type')) {
            // Block editor is not available.
            return;
        }

        register_block_type('custom-blocks/example', [
            'render_callback' => [$this, 'render_example_block'],
            'editor_script'   => 'custom-gutenberg-js',
            'editor_style'    => 'custom-gutenberg-css',
            'script'          => 'custom-gutenberg-js',
            'style'           => 'custom-gutenberg-css',
        ]);
    }

    /**
     * Callback function to render the example block
     * 
     * @param mixed $attibutes
     * @return string|false
     */
    public function render_example_block($attributes) {
        $blockTitle = $attributes['title'] ?? '';

        ob_start();
?>
        <div class="block-example">
            <div class="container">
                <?php if ($blockTitle) : ?>
                    <h2 class="block-example__text">
                        <?php echo esc_html($blockTitle); ?>
                    </h2>
                <?php endif; ?>
            </div>
        </div>
<?php
        $output = ob_get_clean();

        return $output;
    }
}
