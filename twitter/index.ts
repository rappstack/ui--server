/** @see {https://github.com/bradgarropy/next-seo/blob/master/src/components/Twitter/Twitter.tsx} */
import { type twitter_card_type_T } from '@rappstack/domain--server/twitter'
import { maybe__meta_ } from '../meta/index.js'
export function twitter__meta_fragment_($p:twitter_T) {
	const { title, description, image, card, site, creator } = $p
	return [
		maybe__meta_({ key: 'twitter:title', name: 'twitter:title', content: title }),
		maybe__meta_({ key: 'twitter:description', name: 'twitter:description', content: description }),
		maybe__meta_({ key: 'twitter:image', name: 'twitter:image', content: image }),
		maybe__meta_({ key: 'twitter:card', name: 'twitter:card', content: card }),
		maybe__meta_({ key: 'twitter:site', name: 'twitter:site', content: site }),
		maybe__meta_({ key: 'twitter:creator', name: 'twitter:creator', content: creator }),
	]
}
export type twitter_T = {
	title?: string
	description?: string
	image?: string
	card?: twitter_card_type_T
	site?: string
	creator?: string
}
