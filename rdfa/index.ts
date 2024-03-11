import { WebSite_id_ } from '@btakita/domain--server--briantakita/jsonld'
import type { Article, Thing, WebPage } from '@btakita/schema-dts'
import { WebPage_id_ } from '@rappstack/domain--server/jsonld'
import { schema_org_props_rdfa_T } from '@rappstack/domain--server/rdfa'
import { request_url__pathname_ } from '@rappstack/domain--server/request'
import { site__website_ } from '@rappstack/domain--server/site'
import { url__join } from 'ctx-core/uri'
import type { request_ctx_T } from 'rebuildjs/server'
import { link_ } from 'relementjs/html'
export function schema_org_rdfa__link_<T extends Thing>(props:schema_org_props_rdfa_T<T>&{ href:string }) {
	return link_(props)
}
export function schema_org_WebPage_id__link_a1_(ctx:request_ctx_T) {
  return [
		schema_org_rdfa__link_<WebPage>({ property: '@id', href: WebPage_id_(ctx)}),
		schema_org_rdfa__link_<WebPage>({ property: 'isPartOf', href: WebSite_id_(ctx)}),
	]
}
export function schema_org_Article_id__link_a1_(ctx:request_ctx_T) {
	return [
		schema_org_rdfa__link_<Article>({
			property: '@id',
			href: url__join(site__website_(ctx)!, request_url__pathname_(ctx), '#Article')
		}),
		schema_org_rdfa__link_<Article>({ property: 'isPartOf', href: WebPage_id_(ctx)}),
	]
}
