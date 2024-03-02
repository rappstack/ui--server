import { ns_id_be_memo_pair_ } from 'ctx-core/all'
import { request_url_ } from 'relysjs/server'
export const [
	,
	request_url__origin_
] = ns_id_be_memo_pair_(
	'request',
	'request_url__origin',
	ctx=>{
		const request_url = request_url_(ctx)
		const { hostname } = request_url
		const protocol = hostname === 'localhost' ? 'http:' : 'https:'
		return protocol + '//' + hostname
	}
)
