const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
const { TextControl } = wp.components;

const { __ } = wp.i18n;

registerBlockType( 'custom-blocks/example', {
    title: 'Example',
    icon: 'layout',
    category: 'common',
    description: 'Block that displays example title.',
    keywords: ['example'],
    attributes: {
        title: {
            type: 'string',
        },
    },
    edit: ( props ) => {
        const { attributes: { title }, setAttributes, className } = props;
        const onTitleChange = ( newContent ) => {
            setAttributes( { title: newContent } );
        };

        return (
            <div className="block-favorite-quote">
                <RichText
                    tagName="h2"
                    className={ className }
                    onChange={ onTitleChange }
                    value={ title }
                    placeholder={ __( 'Write your custom message', 'custom-gutenberg-blocks' ) }
                />
            </div>
        );
    },
    save: () => null
} );