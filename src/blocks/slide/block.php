<?php
class Slide_Block {
    public function __construct() {
        add_action('init', array($this, 'register_slide_block'));
    }

    public function register_slide_block() {
        if (!function_exists('register_block_type')) {
            // Block editor is not available.
            return;
        }

        register_block_type('custom-blocks/slide', [
            'attributes' => [
                'slides' => [
                    'type' => 'array',
                ]
            ],
            'render_callback' => [$this, 'render_slide_block'],
            'editor_script'   => 'custom-gutenberg-js',
            'editor_style'    => 'custom-gutenberg-css',
            'script'          => 'custom-gutenberg-js',
            'style'           => 'custom-gutenberg-css',
        ]);
    }

    /**
     * Callback function to render the slide block
     * 
     * @param mixed $attibutes
     * @return string|false
     */
    public function render_slide_block($attributes) {
        $blockTitle = $attributes['title'] ?? '';

        ob_start();
?>
        <div class="block-slide">
            <div class="container">
                <?php if ($blockTitle) : ?>
                    <h2 class="block-slide__text">
                        <?php echo $blockTitle; ?>
                    </h2>
                <?php endif; ?>
            </div>
        </div>
<?php
        $output = ob_get_clean();

        return $output;
    }
}
