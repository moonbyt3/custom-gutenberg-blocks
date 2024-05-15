const { useState, useEffect } = wp.element;
const { useSelect } = wp.data;
const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks, useBlockProps, useInnerBlocksProps } = wp.blockEditor;
const { PanelBody, TextControl, CheckboxControl, FormTokenField } = wp.components;

const  apiFetch  = wp.apiFetch;
const { addQueryArgs } = wp.url;

const { __ } = wp.i18n;

const productCategories = (queryArgs) => {
    return apiFetch({
        path: addQueryArgs(`wc/store/products/categories`, {
            per_page: 0,
            ...queryArgs,
        }),
    });
};


registerBlockType( 'custom-blocks/categories-slider', {
    apiVersion: 2,
    title: 'Categories Slider',
    icon: 'layout',
    category: 'common',
    description: 'Block that displays categories-slider title.',
    keywords: ['categories', 'slider'],
    attributes: {
        title: {
            type: 'string',
        },
        categories: {
            type: 'array',
        },
        pickedCategories: {
            type: 'array'
        }
    },
    edit: ( props ) => {
        const ALLOWED_BLOCKS = [ 'custom-blocks/slide' ];

        const { attributes: { categories, pickedCategories }, clientId, setAttributes, className } = props;
        
        const innerBlocksProps = useInnerBlocksProps();

        useEffect(() => {
            productCategories().then((fetchedCategories) => {
                setAttributes({ categories: fetchedCategories });
            });
        }, []);


        return (
            <div { ...useBlockProps() }>
                <InspectorControls>
                    <PanelBody title="My Block Settings">
                        <FormTokenField 
                            label="Choose product categories"
                            __experimentalExpandOnFocus
                            value={pickedCategories && pickedCategories.map(item => item.name)}
                            suggestions={[
                                ...(categories || []).map(category => {
                                    return category.name
                                }),
                            ]}
                            maxSuggestions={20}
                            onChange={(tokens) => {
                                const filteredTerms = categories.filter(item => {
                                    return tokens.some(category => category === item.name)
                                })
                                
                                return setAttributes({pickedCategories: filteredTerms})
                            }}
                        />
                    </PanelBody>
                </InspectorControls>
                <div className="block-categories-slider">
                    <div className="container">
                        <div className="block-categories-slider-wrapper">
                            <div className="block-categories-slider__menu">
                                {pickedCategories && 
                                    <div className="block-categories-slider__menu-item-wrapper">
                                        {pickedCategories.map(({name, image, id}) => {
                                            console.log(image);
                                            return <span className="categories-slider__menu-item" key={`cat-${id}`}>
                                                <div className="categories-slider__menu-item-img">
                                                    <img src={image ? image.src : '/wp-content/uploads/woocommerce-placeholder-324x324.png'} alt={`Category: ${name} image`} />
                                                </div>
                                                <span className="categories-slider__menu-item-text">{name}</span>
                                            </span>
                                        })}
                                    </div>
                                }
                            </div>
                            <div style={{ 'display': 'block', 'width': '80%'}}>
                                <InnerBlocks
                                    {...innerBlocksProps}
                                    allowedBlocks={ ALLOWED_BLOCKS }
                                    renderAppender={
                                        () => {
                                            return(<InnerBlocks.ButtonBlockAppender />)
                                        }
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    save: props => {
		return <InnerBlocks.Content />
	}
} );