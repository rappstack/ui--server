import { raw_ } from 'relementjs'
import { script_, style_ } from 'relementjs/html'
type nofouc__remove__fragment_props_T = {
	dark_bg_color:string
	light_bg_color:string
	reset_timeout?:number
}
export function nofouc__theme__set__fragment_($p:nofouc__remove__fragment_props_T) {
	const { dark_bg_color, light_bg_color } = $p
	let { reset_timeout } = $p
	reset_timeout ??= 1000
	return [
		// @formatter:off
		style_({ type: 'text/css' }, raw_(
			// language=css
			`html{background-color:rgb(${light_bg_color});}@media (prefers-color-scheme: dark){body{background-color:rgb(${dark_bg_color});}}html.nofouc .nofouc{opacity:0;}`
		)),
		script_(raw_(
			// remove fouc
			// language=js
			`let t=globalThis.__theme=localStorage.getItem('theme')??window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';let h=document.firstElementChild;h.classList.add(t);h.setAttribute('data-color-scheme',t);h.style.backgroundColor='rgb('+(t==='dark'?'${dark_bg_color}':'${light_bg_color}')+')';setTimeout(()=>{document.querySelector('html').classList.remove('nofouc');h.style.backgroundColor=''},${reset_timeout});`
		)),
		// @formatter:on
	]
}
type nofouc__body_bg__script_props_T = {
	bg_color?:string
	dark_bg_color?:string
	light_bg_color?:string
}&(
	|{ bg_color:string }
	|{ dark_bg_color:string, light_bg_color:string })
export function nofouc__body_bg__script_($p:nofouc__body_bg__script_props_T) {
	const {
		bg_color,
		dark_bg_color,
		light_bg_color,
	} = $p
	// @formatter:off
	return script_({ type: 'application/javascript' }, raw_(
		`document.body.style.backgroundColor='rgb('+(globalThis.__theme==='dark'?'${dark_bg_color ?? bg_color}':'${light_bg_color ?? bg_color}')+')';setTimeout(()=>document.body.style.backgroundColor=undefined,1000)`))
	// @formatter:on
}
