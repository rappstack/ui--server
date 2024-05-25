import { site__color_scheme_vars_, site__color_scheme_vars__css_ } from '@rappstack/domain--server/site'
import { type wide_ctx_T } from 'ctx-core/be'
import { raw_ } from 'relementjs'
import { script_, style_ } from 'relementjs/html'
type props_T = {
	ctx:wide_ctx_T
}
export function site__color_scheme_vars__style_({ ctx }:props_T) {
	return style_({ type: 'text/css' }, raw_(site__color_scheme_vars__css_(ctx)))
}
export function site__data_color_scheme__script_({ ctx }:props_T) {
	// language=js
	return (
		site__color_scheme_vars_(ctx)
		? script_({ type: 'module' }, raw_(`
	// remove fouc
	const localStorage__theme = localStorage.getItem('theme')
	document.firstElementChild.setAttribute(
		'data-color-scheme',
		localStorage__theme
			? localStorage__theme
			: window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light')
`.trim()))
			: null
	)
}
