import type { Article, Thing } from 'schema-dts'
import { WebPage_id_ } from '@rappstack/domain--server/jsonld'
import { Article_id_, type schema_org_props_rdfa_T } from '@rappstack/domain--server/rdfa'
import { link_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
export function schema_org_rdfa__link_<T extends Thing>(props:schema_org_props_rdfa_T<T>&{ href:string }) {
	return link_(props)
}
export function schema_org_Article__link_a1_(ctx:request_ctx_T) {
	return [
		schema_org_rdfa__link_<Article>({
			property: '@id',
			href: Article_id_(ctx)
		}),
		schema_org_rdfa__link_<Article>({ property: 'isPartOf', href: WebPage_id_(ctx)}),
	]
}
