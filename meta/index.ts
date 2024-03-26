/** @see {https://github.com/bradgarropy/next-seo/blob/master/src/components/Meta/Meta.tsx} */
import { type meta_color_scheme_T } from '@rappstack/domain--server/meta'
import { type nullish } from 'relementjs'
import { type tag_props_val_OR_rmemo_T_OR_fn_T } from 'relementjs/any'
import { meta_, title_ } from 'relementjs/html'
export function maybe__meta_({ content, ...props }:maybe__meta_T) {
	return (
		content
			? meta_({ ...props, content })
			: null
	)
}
export type maybe__meta_T = {
	property?:string
	key?:string
	name?:string
	content:string|number|nullish
	[prop:string]:tag_props_val_OR_rmemo_T_OR_fn_T
}
export function meta_fragment_($p:meta_fragment_props_T) {
	const { title, description, keyword_a, keywords, icon, theme_color, color_scheme } = $p
	return [
		title ? title_({ key: 'title' }, title) : null,
		maybe__meta_({ key: 'description', name: 'description', content: description }),
		keyword_a ? maybe__meta_({ key: 'keywords', name: 'keywords', content: keyword_a.join(',') }) : null,
		maybe__meta_({ key: 'keywords', name: 'keywords', content: keywords }),
		maybe__meta_({ key: 'icon', name: 'icon', content: icon }),
		maybe__meta_({ key: 'theme-color', name: 'theme-color', content: theme_color }),
		maybe__meta_({ key: 'color-scheme', name: 'color-scheme', content: color_scheme }),
	]
}
export type meta_fragment_props_T = {
	title?:string
	description?:string
	keyword_a?:string[]
	keywords?:string
	icon?:string
	theme_color?:string
	color_scheme?:meta_color_scheme_T
}
