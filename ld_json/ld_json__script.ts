import { raw_ } from 'relementjs'
import { script_ } from 'relementjs/html'
import type { Graph, Thing, WithContext } from 'schema-dts'
export function ld_json__script_<L extends undefined|WithContext<Thing>|Graph>(ld_json:L) {
	return ld_json && script_({ type: 'application/ld+json' }, raw_(JSON.stringify(ld_json)))
}
