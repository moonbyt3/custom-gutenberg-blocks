<?php
class Card_Product_Block {
    public function __construct() {
        add_action('init', array($this, 'register_card_product_block'));
    }

    public function register_card_product_block() {
        if (!function_exists('register_block_type')) {
            // Block editor is not available.
            return;
        }

        register_block_type('custom-blocks/card-product', [
            'attributes' => [
                'title' => [
                    'type' => 'string',
                ],
            ],
            'render_callback' => [$this, 'render_card_product_block'],
            'editor_script' => 'custom-gutenberg-js',
            'editor_style' => 'custom-gutenberg-css',
            'script' => 'custom-gutenberg-js',
            'style' => 'custom-gutenberg-css',
        ]);
    }

    /**
     * Callback function to render the card-product block
     *
     * @param mixed $attibutes
     * @return string|false
     */
    public function render_card_product_block($attributes) {
        $blockTitle = $attributes['title'] ?? '';

        ob_start();
?>

        <div class="product-component-wrapper">
            <div class="product-component">
                <a class="product-component__img" href="#">
                    <img src="" alt="asdas">
                    <span class="product-component__img-sale onsale">
                        <span class="product-component__img-sale-text">
                            Akcija
                        </span>
                    </span>
                </a>
                <div class="product-component__info">
                    <span class="product-component__sku"><?php echo '$productSku'; ?></span>
                    <p class="product-component__name" title="Proizvod: <?php echo '$productName'; ?>"><a href="<?php echo '$productLink'; ?>"><?php echo '$productName'; ?></a></p>

                    <div class="product-component__price-holder">
                        <p class="product-component__price"><?php echo '$product->get_price_html()'; ?></p>
                    </div>

                    <div class="product-component__buttons">
                        <a href="<?php echo '$productLink'; ?>" class="button button--inverse">Više</a>

                        <a class="product-component__buttons-btn button ajax_add_to_cart add_to_cart_button" href="#" value="####" data-quantity="1" data-product_id="<?php echo '$productId'; ?>" data-product_sku="<?php echo '$productSku'; ?>" aria-label="Dodaj “<?php echo '$productName'; ?>” u Vašu korpu.">
                            <span class="product-component__buttons-btn-text">
                                Dodaj u korpu
                            </span>
                            <div class="product-component__buttons-btn-loader">
                                <span class="loader"></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
<?php
        $output = ob_get_clean();

        return $output;
    }
}
