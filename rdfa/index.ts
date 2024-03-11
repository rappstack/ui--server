import type { Article, Thing } from '@btakita/schema-dts'
import { schema_org_props_rdfa_T } from '@rappstack/domain--server/rdfa'
import { request_url__pathname_ } from '@rappstack/domain--server/request'
import { site__website_ } from '@rappstack/domain--server/site'
import { url__join } from 'ctx-core/uri'
import type { request_ctx_T } from 'rebuildjs/server'
import { link_ } from 'relementjs/html'
export function schema_org_rdfa__link_<T extends Thing>(props:schema_org_props_rdfa_T<T>&{ href:string }) {
	return link_(props)
}
export function schema_org_Article_id__link_(ctx:request_ctx_T) {
	return schema_org_rdfa__link_<Article>({
		property: '@id',
		href: url__join(site__website_(ctx)!, request_url__pathname_(ctx), '#Article')
	})
}
