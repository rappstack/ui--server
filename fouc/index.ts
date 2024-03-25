import { raw_ } from 'relementjs'
import { script_ } from 'relementjs/html'
export function fouc__remove__script_($p:fouc__remove__script_props_T) {
	let { dark_bg_color, light_bg_color, reset_timeout } = $p
	reset_timeout ??= 1000
	return (
		script_({ type: 'module' }, raw_(
			// remove fouc
			/// language=js
			`let t=localStorage.getItem('theme')??window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';let h=document.firstElementChild;h.setAttribute('data-theme',t);h.style.backgroundColor='rgb('+(t==='dark'?'${dark_bg_color}':'${light_bg_color}')+')';setTimeout(()=>h.style.backgroundColor='',${reset_timeout})`
		)))
}
export type fouc__remove__script_props_T = {
	dark_bg_color:string
	light_bg_color:string
	reset_timeout?:number
}
