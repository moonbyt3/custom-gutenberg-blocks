const { useState, useEffect } = wp.element;
const { useSelect } = wp.data;
const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks, useBlockProps, useInnerBlocksProps } = wp.blockEditor;
const { PanelBody, TextControl, CheckboxControl, FormTokenField } = wp.components;

const apiFetch = wp.apiFetch;
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


registerBlockType('custom-blocks/categories-slider', {
    apiVersion: 2,
    title: 'Categories Slider',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 185 180"><path stroke="#4D4D4D" d="M168.333 48.276 16.365 46.503 7.917 68.305v43.3l8.448 20.915 151.968-.887 8.75-19.725V67.785l-8.75-19.509Z" /><path fill="url(#a)" stroke="#4D4D4D" d="M37.083 39.582h110.833L92.305 11.898 37.083 39.582Z" /><path fill="url(#b)" stroke="#4D4D4D" d="M147.917 141.418H37.084l55.611 25.706 55.222-25.706Z" /><path stroke="#4D4D4D" fill="#fff" d="m180 64.462-11.293-25.927L92.451 3 15.459 38.535 5 64.462v51.493l10.459 25.927L92.792 178l75.915-36.118L180 116.315V64.462Z" /><path fill="#164690" d="M60.66 100.129a9380.739 9380.739 0 0 0 17.086-40.773h20.453l-12.887 62.288H71.344l7.192-34.85-14.758 34.85H48.646l-.416-34.638-7.15 34.638H27.36l12.887-62.288H60.66v40.773Zm53.474 3.664H90.273l2.41-11.504h23.863l-2.412 11.504Zm26.195-44.437c6.679 0 11.294 1.548 13.844 4.644 1.662 2.045 2.494 4.786 2.494 8.222 0 1.818-.222 3.82-.665 6.008-1.525 7.385-5.114 12.767-10.767 16.147l5.986 27.267h-15.34l-4.448-23.518h-.748l-4.864 23.518h-14.508L124.2 59.356h16.129Zm-6.194 27.267c1.913 0 3.437-.668 4.573-2.002 1.164-1.335 2.037-3.366 2.619-6.093.25-1.25.374-2.372.374-3.366 0-2.84-1.455-4.26-4.365-4.26h-.997l-3.285 15.72h1.081Z" /><defs><linearGradient id="a" x1="92.5" x2="92.5" y1="11.898" y2="39.582" gradientUnits="userSpaceOnUse"><stop stopColor="#E52727" stopOpacity="0" /><stop offset="1" stopColor="#E52727" /></linearGradient><linearGradient id="b" x1="92.5" x2="92.5" y1="167.124" y2="141.418" gradientUnits="userSpaceOnUse"><stop stopColor="#D9D9D9" stopOpacity="0" /><stop offset="1" stopColor="#164690" /></linearGradient></defs></svg>,
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
    edit: (props) => {
        const ALLOWED_BLOCKS = ['custom-blocks/slide'];

        const { attributes: { categories, pickedCategories }, clientId, setAttributes, className } = props;

        const innerBlocksProps = useInnerBlocksProps();

        useEffect(() => {
            productCategories().then((fetchedCategories) => {
                setAttributes({ categories: fetchedCategories });
            });
        }, []);


        return (
            <div {...useBlockProps()}>
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

                                return setAttributes({ pickedCategories: filteredTerms })
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
                                        {pickedCategories.map(({ name, image, id }) => {
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
                            <div style={{ 'display': 'block', 'width': '80%' }}>
                                <InnerBlocks
                                    {...innerBlocksProps}
                                    allowedBlocks={ALLOWED_BLOCKS}
                                    renderAppender={
                                        () => {
                                            return (<InnerBlocks.ButtonBlockAppender />)
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
});