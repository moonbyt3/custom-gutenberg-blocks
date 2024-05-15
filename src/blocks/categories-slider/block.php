<?php
class Categories_Slider_Block {
    public function __construct() {
        add_action('init', array($this, 'register_categories_slider_block'));
    }

    public function register_categories_slider_block() {
        if (!function_exists('register_block_type')) {
            // Block editor is not available.
            return;
        }

        register_block_type('custom-blocks/categories-slider', [
            'render_callback' => [$this, 'render_categories_slider_block'],
            'editor_script'   => 'custom-gutenberg-js',
            'editor_style'    => 'custom-gutenberg-css',
            'script'          => 'custom-gutenberg-js',
            'style'           => 'custom-gutenberg-css',
        ]);
    }

    /**
     * Callback function to render the categories_slider block
     * 
     * @param mixed $attibutes
     * @return string|false
     */
    public function render_categories_slider_block($attributes, $content, $block) {
        $productCategories = $attributes['pickedCategories'] ?? [];
        $slider = $attibutes['slider'] ?? [];

        // Check how many inner blocks are available

        ob_start();
?>
        <section class="block-categories-slider">
            <div class="container">
                <div class="block-categories-slider-wrapper">
                    <div class="block-categories-slider__menu">
                        <?php if (!empty($productCategories)) : ?>
                            <div class="block-categories-slider__menu-item-wrapper">
                                <?php foreach ($productCategories as $pickedCategory) :
                                    $categoryId = $pickedCategory['id'];
                                    $term = get_term($categoryId, 'product_cat');
                                    if ($term && !is_wp_error($term)) :
                                        $term_name = $term->name;
                                        $term_link = get_term_link($term);
                                        $thumbnail_id = get_term_meta($categoryId, 'thumbnail_id', true);

                                        $term_image = wp_get_attachment_image($thumbnail_id, 'small');
                                ?>
                                        <a href="<?php echo $term_link; ?>" class="block-categories-slider__menu-item">
                                            <?php if (!empty($term_image)) : ?>
                                                <div class="block-categories-slider__menu-item-img">
                                                    <?php echo $term_image; ?>
                                                </div>
                                            <?php else : ?>
                                                <div class="block-categories-slider__menu-item-img">
                                                    <img src="/wp-content/uploads/woocommerce-placeholder-324x324.png" alt="">
                                                </div>
                                            <?php endif; ?>
                                            <span class="block-categories-slider__menu-item-text"><?php echo $term_name; ?></span>
                                        </a>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                    <div class="categories-slider__items js-slider-images">
                        <?php echo $content; ?>
                    </div>
                </div>
            </div>
        </section>
<?php
        $output = ob_get_clean();

        return $output;
    }
}
