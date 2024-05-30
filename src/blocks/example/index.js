import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';

registerBlockType( 'custom-blocks/example', {
	title: 'Example',
	icon: 'layout',
	category: 'common',
	description: 'Block that displays example title.',
	keywords: [ 'example' ],
	attributes: {
		title: {
			type: 'string',
		},
	},
	edit,
	save: () => null,
} );
