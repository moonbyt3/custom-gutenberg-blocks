const { registerBlockType } = wp.blocks;
const { InnerBlocks, RichText } = wp.blockEditor;
const { TextControl, SearchControl } = wp.components;

const { __ } = wp.i18n;

registerBlockType('custom-blocks/products', {
    title: 'Products',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 185 180"><path stroke="#4D4D4D" d="M168.333 48.276 16.365 46.503 7.917 68.305v43.3l8.448 20.915 151.968-.887 8.75-19.725V67.785l-8.75-19.509Z" /><path fill="url(#a)" stroke="#4D4D4D" d="M37.083 39.582h110.833L92.305 11.898 37.083 39.582Z" /><path fill="url(#b)" stroke="#4D4D4D" d="M147.917 141.418H37.084l55.611 25.706 55.222-25.706Z" /><path stroke="#4D4D4D" fill="#fff" d="m180 64.462-11.293-25.927L92.451 3 15.459 38.535 5 64.462v51.493l10.459 25.927L92.792 178l75.915-36.118L180 116.315V64.462Z" /><path fill="#164690" d="M60.66 100.129a9380.739 9380.739 0 0 0 17.086-40.773h20.453l-12.887 62.288H71.344l7.192-34.85-14.758 34.85H48.646l-.416-34.638-7.15 34.638H27.36l12.887-62.288H60.66v40.773Zm53.474 3.664H90.273l2.41-11.504h23.863l-2.412 11.504Zm26.195-44.437c6.679 0 11.294 1.548 13.844 4.644 1.662 2.045 2.494 4.786 2.494 8.222 0 1.818-.222 3.82-.665 6.008-1.525 7.385-5.114 12.767-10.767 16.147l5.986 27.267h-15.34l-4.448-23.518h-.748l-4.864 23.518h-14.508L124.2 59.356h16.129Zm-6.194 27.267c1.913 0 3.437-.668 4.573-2.002 1.164-1.335 2.037-3.366 2.619-6.093.25-1.25.374-2.372.374-3.366 0-2.84-1.455-4.26-4.365-4.26h-.997l-3.285 15.72h1.081Z" /><defs><linearGradient id="a" x1="92.5" x2="92.5" y1="11.898" y2="39.582" gradientUnits="userSpaceOnUse"><stop stopColor="#E52727" stopOpacity="0" /><stop offset="1" stopColor="#E52727" /></linearGradient><linearGradient id="b" x1="92.5" x2="92.5" y1="167.124" y2="141.418" gradientUnits="userSpaceOnUse"><stop stopColor="#D9D9D9" stopOpacity="0" /><stop offset="1" stopColor="#164690" /></linearGradient></defs></svg>,
    category: 'common',
    description: 'Block that displays products title.',
    keywords: ['products'],
    attributes: {
        title: {
            type: 'string',
        },
    },
    edit: (props) => {
        const { attributes: { title }, setAttributes, className } = props;

        const ALLOWED_BLOCKS = ['custom-blocks/card-product'];

        const onTitleChange = (newContent) => {
            setAttributes({ title: newContent });
        };

        return (
            <>
                <div className="block-products">
                    <div className="container">
                        <RichText
                            tagName="h1"
                            className={className + ' block-products__title section-title'}
                            onChange={onTitleChange}
                            value={title}
                            placeholder={__('Write your custom message', 'custom-gutenberg-blocks')}
                        />

                        <div className="block-products-slider">
                            <div className="block-products-wrapper products-tabs-wrapper">
                                <InnerBlocks
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
            </>
        );
    },
    save: () => {
        return <InnerBlocks.Content />
    }
});