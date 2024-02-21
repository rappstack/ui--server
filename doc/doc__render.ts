import { fragment_, raw_, type tag_dom_T } from 'relementjs'
export const xml_doctype = '<?xml version="1.0" encoding="UTF-8"?>'
export function doc__render(doctype:string, ...children:tag_dom_T[]) {
	return '' + fragment_([
		raw_(doctype),
		...children
	])
}
