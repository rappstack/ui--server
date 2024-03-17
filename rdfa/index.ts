import { type schema_org_props_rdfa_T } from '@rappstack/domain--server/rdfa'
import { link_ } from 'relementjs/html'
import type { Thing } from 'schema-dts'
export function schema_org_rdfa__link_<T extends Thing>(props:schema_org_props_rdfa_T<T>&{ href:string }) {
	return link_(props)
}
export function schema_org_rdfa__meta_<T extends Thing>(props:schema_org_props_rdfa_T<T>&{ content:string }) {
	return link_(props)
}
