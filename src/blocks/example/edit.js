import { useBlockProps, RichText } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';


const Edit = ( props ) => {
    const {
		attributes: { title },
		setAttributes,
	} = props;

    const blockProps = useBlockProps();

    const onTitleChange = ( newContent ) => {
        setAttributes( { title: newContent } );
    };

    return(
        <div { ...blockProps }>
            <div className="block-example">
                <div className="container">
                    <RichText
                        tagName="h2"
                        className={ ' block-example__text' }
                        onChange={ onTitleChange }
                        value={ title }
                        placeholder={ __(
                            'Write your custom message',
                            'custom-gutenberg-blocks'
                        ) }
                    />
                </div>
            </div>
        </div>
    );
}

export default Edit;