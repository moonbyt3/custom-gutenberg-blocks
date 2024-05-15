const { registerBlockType } = wp.blocks;
const { useBlockProps, MediaUpload, RichText, URLInputButton } = wp.blockEditor;
const { TextControl, Button } = wp.components;

const { __ } = wp.i18n;

registerBlockType( 'custom-blocks/slide', {
    title: 'Slide',
    icon: 'layout',
    category: 'common',
    description: 'GUTENBERG Block that displays SLIDE for slider title.',
    keywords: ['slide'],
    attributes: {
        slideImageBackground: {
            type: 'string',
        },
        slideSubtitle: {
            type: 'string',
            default: 'qweqweqwe'
        },
        slideTitle: {
            type: 'string',
        },
        slideText: {
            type: 'string',
        },
        slideButton: {
            type: 'string'
        }
    },
    edit: ( props ) => {
        const { attributes: { slideImageBackground, slideSubtitle, slideTitle, slideText, slideButton }, setAttributes, className } = props;
    
        return (
            <div {...useBlockProps}>
                <div className="categories-slider__items-slide flexible-bg-image">
                    <picture>
                        <img className="has-cover" src={slideImageBackground} alt="" />
                    </picture>
                    <div className="categories-slider__items-slide-content">
                        <div className="categories-slider__items-slide-content-label onsale">
                            {slideSubtitle && 
                                <span className="categories-slider__items-slide-content-label-text">
                                    <RichText
                                        tagName="h3"
                                        value={slideSubtitle}
                                        onChange={(value) => setAttributes({slideSubtitle: value})}
                                        placeholder="Enter subtitle"
                                    />
                                </span>
                            }
                        </div>
                        <RichText
                            className="categories-slider__items-slide-content-title bg-blur"
                            tagName="h2"
                            value={slideTitle}
                            onChange={(value) => setAttributes({slideTitle: value})}
                            placeholder="Enter title"
                        />

                        <div className="categories-slider__items-slide-content-text bg-blur">
                            <RichText
                                tagName="p"
                                value={slideText}
                                onChange={(value) => setAttributes({slideText: value})}
                                placeholder="Enter text"
                            />

                            <span href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>" className="button">
                                <URLInputButton 
                                    url={  '' }
                                    onChange={ ( url, post ) => {
                                        console.log('change urlInputButton ', url, post);
                                    } }
                                />
                            </span>
                        </div>
                    </div>
                    {/* <MediaUpload
                        onSelect={(media) => onSlideChange(media.url, index, 'image')}
                        type="image"
                        value={slideImageBackground}
                        render={({ open }) => (
                            <Button onClick={open}>Upload Image</Button>
                        )}
                    /> */}
                    
                    <Button isPrimary onClick={() => removeSlide(index)}>Remove Slide</Button>
                </div>
            </div>
        );
    },
    save: () => null
} );