import { raw_ } from 'relementjs'
import { script_ } from 'relementjs/html'
import type { Graph, Thing, WithContext } from '@btakita/schema-dts'
export function jsonld__script_<L extends undefined|WithContext<Thing>|Graph>(jsonld:L) {
	return jsonld && script_({ type: 'application/ld+json' }, raw_(JSON.stringify(jsonld)))
}
