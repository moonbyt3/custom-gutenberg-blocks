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
    public function render_categories_slider_block($attributes) {
        $productCategories = $attributes['pickedCategories'] ?? [];
        $slider = $attibutes['slider'] ?? [];
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

                    <?php if (!empty($slider)) : ?>
                        <div class="categories-slider__items js-slider-images">
                            <?php while ($slider['slides']) : ?>

                                <?php
                                $sliderDesktopImage = get_sub_field('categories_slider_desktop_image');
                                $sliderTabletImage = get_sub_field('categories_slider_tablet_image');
                                $sliderMobileImage = get_sub_field('categories_slider_mobile_image');
                                $slideLink = get_sub_field('categories_slider_link');
                                $slideLabel = get_sub_field('categories_slider_link_label');
                                $slideTitle = get_sub_field('categories_slider_link_title');
                                $slideText = get_sub_field('categories_slider_link_text');
                                ?>

                                <div class="categories-slider__items-slide flexible-bg-image">
                                    <picture>
                                        <!-- Picture on large screens-->
                                        <?php if ($sliderDesktopImage) : ?>
                                            <source media="(min-width: 1200px)" srcset="<?php echo $sliderDesktopImage['url']; ?>">
                                        <?php endif; ?>
                                        <!-- Picture on tablet screens-->
                                        <?php if ($sliderTabletImage) : ?>
                                            <source media="(min-width: 768px)" srcset="<?php echo $sliderTabletImage['url']; ?>">
                                        <?php endif; ?>
                                        <!-- Picture on screens less than 768px width-->
                                        <?php if ($sliderMobileImage) : ?>
                                            <img class="has-cover" src="<?php echo $sliderMobileImage['url']; ?>" alt="<?php echo $sliderDesktopImage['alt'] xor $sliderTabletImage['alt']; ?>">
                                        <?php else : ?>
                                            <img class="has-cover" src="<?php echo $sliderDesktopImage['url']; ?>" alt="<?php echo $sliderDesktopImage['alt'] xor $sliderTabletImage['alt']; ?>">
                                        <?php endif; ?>
                                    </picture>
                                    <div class="categories-slider__items-slide-content">
                                        <?php if ($slideLabel) : ?>
                                            <div class="categories-slider__items-slide-content-label onsale">
                                                <span class="categories-slider__items-slide-content-label-text">
                                                    <?php echo $slideLabel; ?>
                                                </span>
                                            </div>
                                        <?php endif; ?>
                                        <?php if ($slideTitle) : ?>
                                            <h2 class="categories-slider__items-slide-content-title bg-blur">
                                                <?php echo $slideTitle; ?>
                                            </h2>
                                        <?php endif; ?>
                                        <?php if ($slideText) : ?>
                                            <div class="categories-slider__items-slide-content-text bg-blur">
                                                <?php echo wp_kses_post($slideText); ?>

                                                <?php
                                                $link_url = $slideLink['url'];
                                                $link_title = $slideLink['title'] ? $slideLink['title'] : 'Pročitajte više';
                                                $link_target = $slideLink['target'] ? $slideLink['target'] : '_self';
                                                ?>
                                                <a href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>" class="button"><?php echo esc_html($link_title); ?></a>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </section>
<?php
        $output = ob_get_clean();

        return $output;
    }
}
