<?php
class Products_Block {
    public function __construct() {
        add_action('init', array($this, 'register_products_block'));
    }

    public function register_products_block() {
        if (!function_exists('register_block_type')) {
            // Block editor is not available.
            return;
        }

        register_block_type('custom-blocks/products', [
            'attributes' => [
                'title' => [
                    'type' => 'string',
                ]
            ],
            'render_callback' => [$this, 'render_products_block'],
            'editor_script'   => 'custom-gutenberg-js',
            'editor_style'    => 'custom-gutenberg-css',
            'script'          => 'custom-gutenberg-js',
            'style'           => 'custom-gutenberg-css',
        ]);
    }

    /**
     * Callback function to render the products block
     * 
     * @param mixed $attibutes
     * @return string|false
     */
    public function render_products_block($attributes) {
        $blockTitle = $attributes['title'] ?? '';
        $chosenProducts = $attibutes['chosenProducts'] ?? [];

        ob_start();
?>
        <div class="block-products">
            <div class="container">
                <?php if ($blockTitle) : ?>
                    <h1 class="block-products__title section-title">
                        <?php echo $blockTitle; ?>
                    </h1>
                <?php endif; ?>
                <div class="block-products-slider">
                    <div class="block-products-wrapper products-tabs-wrapper">
                        <?php if ($chosenProducts) : ?>
                            <?php
                            $args = [
                                'include' => $chosenProducts
                            ];
                            $products = wc_get_products($args);
                            ?>
                            <?php foreach ($products as $product) : ?>
                                <?php
                                get_template_part('template-parts/parts/component', 'product', $product);
                                ?>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
<?php
        $output = ob_get_clean();

        return $output;
    }
}
