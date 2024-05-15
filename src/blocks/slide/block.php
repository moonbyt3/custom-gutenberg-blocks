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
        $slide = $attributes ?? [];

        ob_start();
?>
        <?php if (!empty($slide)) : ?>
            <?php

            $slideImage = $slide['slideImageBackground'] ?? '';
            $sliderTabletImageTablet = $slide['slideImageBackgroundTablet'] ?? '';
            $sliderMobileImageMobile = $slide['slideImageBackgroundMobile'] ?? '';
            $slideLabel = $slide['slideSubtitle'] ?? '';
            $slideTitle = $slide['slideTitle'] ?? '';
            $slideText = $slide['slideText'] ?? '';
            $slideLink = $slide['slideButtonUrl'] ?? '';
            $slideLinkText = $slide['slideButtonText'] ?? '';
            ?>

            <div class="block-categories-slider__items-slide flexible-bg-image">
                <picture>
                    <!-- Picture on large screens-->
                    <?php if ($slideImage) : ?>
                        <source media="(min-width: 1200px)" srcset="<?php echo $slideImage; ?>">
                    <?php endif; ?>
                    <!-- Picture on tablet screens-->
                    <?php if ($sliderTabletImageTablet) : ?>
                        <source media="(min-width: 768px)" srcset="<?php echo $sliderTabletImageTablet; ?>">
                    <?php endif; ?>
                    <!-- Picture on screens less than 768px width-->
                    <?php if ($sliderMobileImageMobile) : ?>
                        <img class="has-cover" src="<?php echo $sliderMobileImageMobile; ?>" alt="Background image">
                    <?php else : ?>
                        <img class="has-cover" src="<?php echo $slideImage; ?>" alt="Background image">
                    <?php endif; ?>
                </picture>

                <div class="block-categories-slider__items-slide-content">
                    <?php if ($slideLabel) : ?>
                        <div class="block-categories-slider__items-slide-content-label onsale">
                            <span class="block-categories-slider__items-slide-content-label-text">
                                <?php echo $slideLabel; ?>
                            </span>
                        </div>
                    <?php endif; ?>
                    <?php if ($slideTitle) : ?>
                        <h2 class="block-categories-slider__items-slide-content-title bg-blur">
                            <?php echo $slideTitle; ?>
                        </h2>
                    <?php endif; ?>
                    <?php if ($slideText) : ?>
                        <div class="block-categories-slider__items-slide-content-text bg-blur">
                            <p>
                                <?php echo wp_kses_post($slideText); ?>
                            </p>
                            <?php if ($slideLink) : ?>
                                <a href="<?php echo esc_url($slideLink); ?>" class="button">
                                    <?php echo esc_html($slideLinkText); ?>
                                </a>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>

        <?php endif; ?>
<?php
        $output = ob_get_clean();

        return $output;
    }
}
