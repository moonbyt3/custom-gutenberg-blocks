const { registerBlockType } = wp.blocks;
const { useBlockProps, InspectorControls, MediaUpload, RichText, URLInputButton } = wp.blockEditor;
const { Panel, PanelBody, PanelRow, TextControl, Button } = wp.components;
const { __ } = wp.i18n;

registerBlockType( 'custom-blocks/slide', {
    apiVersion: 2,
    title: 'Slide',
    icon: 'layout',
    category: 'common',
    description: 'GUTENBERG Block that displays SLIDE for slider title.',
    keywords: ['slide'],
    parent: ['custom-blocks/categories-slider'],
    attributes: {
        slideImageBackground: {
            type: 'string',
        },
        slideImageBackgroundTablet: {
            type: 'string',
        },
        slideImageBackgroundMobile: {
            type: 'string',
        },
        slideSubtitle: {
            type: 'string',
        },
        slideTitle: {
            type: 'string',
        },
        slideText: {
            type: 'string',
        },
        slideButtonUrl: {
            type: 'string'
        },
        slideButtonText: {
            type: 'string'
        }
    },
    edit: ( props ) => {
        const { 
            attributes: { 
                slideImageBackground, 
                slideImageBackgroundTablet, 
                slideImageBackgroundMobile, 
                slideSubtitle, 
                slideTitle, 
                slideText, 
                slideButtonUrl, 
                slideButtonText 
            }, 
            setAttributes, 
            className 
        } = props;

        const blockProps = useBlockProps();
        
        return (
            <>
                <InspectorControls>
                    <Panel header="My Panel">
                        <PanelBody title="Settings" initialOpen={ true }>
                            <PanelRow>
                                <div>
                                    <img style={{'display': 'block'}} src={slideImageBackgroundTablet ?? '/wp-content/uploads/woocommerce-placeholder-324x324.png'} />
                                    <MediaUpload
                                        onSelect={(media) => setAttributes({slideImageBackgroundTablet: media.url})}
                                        type="image"
                                        value={slideImageBackgroundTablet}
                                        render={({ open }) => (
                                            <Button isPrimary onClick={open}>
                                                {!slideImageBackgroundTablet ? 'Upload Tablet Image' : 'Edit Tablet Background'}
                                            </Button>
                                        )}
                                    />
                                </div>
                            </PanelRow>
                            <PanelRow>
                                <div>
                                    <img style={{'display': 'block'}} src={slideImageBackgroundMobile ?? '/wp-content/uploads/woocommerce-placeholder-324x324.png'} />
                                    <MediaUpload
                                        onSelect={(media) => setAttributes({slideImageBackgroundMobile: media.url})}
                                        type="image"
                                        value={slideImageBackgroundMobile}
                                        render={({ open }) => (
                                            <Button isPrimary onClick={open}>
                                                {!slideImageBackgroundMobile ? 'Upload Mobile Image' : 'Edit Mobile Background'}
                                            </Button>
                                        )}
                                    />
                                </div>
                            </PanelRow>
                        </PanelBody>
                    </Panel>
                </InspectorControls>
                <div {...blockProps}>
                    <div className="categories-slider__items-slide flexible-bg-image">
                        <picture>
                            <img className="has-cover" src={slideImageBackground} alt="" />
                        </picture>
                        <div className="categories-slider__items-slide-content">
                            <div className="categories-slider__items-slide-content-label onsale">
                                <RichText
                                    tagName="h3"
                                    className="categories-slider__items-slide-content-label-text"
                                    value={slideSubtitle}
                                    onChange={(value) => setAttributes({slideSubtitle: value})}
                                    placeholder="Enter subtitle"
                                />
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
                                    <RichText
                                        tagName="p"
                                        value={slideButtonText}
                                        onChange={(value) => setAttributes({slideButtonText: value})}
                                        placeholder="Enter text"
                                    />
                                    <URLInputButton 
                                        url={  slideButtonUrl }
                                        onChange={ ( url ) => {
                                            return setAttributes({slideButtonUrl: url})
                                        } }
                                        expanded
                                    ></URLInputButton>
                                </span>
                            </div>
                        </div>
                        <MediaUpload
                            onSelect={(media) => setAttributes({slideImageBackground: media.url})}
                            type="image"
                            value={slideImageBackground}
                            render={({ open }) => (
                                <Button isPrimary onClick={open}>
                                    {!slideImageBackground ? 'Upload Image' : 'Edit Background'}
                                </Button>
                            )}
                        />
                        
                    </div>
                </div>
            </>
        );
    },
    save: () => null
} );