import { tagsNS } from 'relementjs'
/** @see {https://cyber.harvard.edu/rss/rss.html} */
let _tagsNS, rss_tags
export function rss_tags_() {
	if (_tagsNS !== tagsNS) {
		_tagsNS = tagsNS
		rss_tags = _tagsNS?.('http://backend.userland.com/rss2')
	}
	return rss_tags
}
export let author_ = (...arg_a)=>rss_tags_().author(...arg_a)
export let category_ = (...arg_a)=>rss_tags_().category(...arg_a)
export let channel_ = (...arg_a)=>rss_tags_().channel(...arg_a)
export let cloud_ = (...arg_a)=>rss_tags_().cloud(...arg_a)
export let copyright_ = (...arg_a)=>rss_tags_().copyright(...arg_a)
export let description_ = (...arg_a)=>rss_tags_().description(...arg_a)
export let docs_ = (...arg_a)=>rss_tags_().docs(...arg_a)
export let generator_ = (...arg_a)=>rss_tags_().generator(...arg_a)
export let guid_ = (...arg_a)=>rss_tags_().guid(...arg_a)
export let image_ = (...arg_a)=>rss_tags_().image(...arg_a)
export let item_ = (...arg_a)=>rss_tags_().item(...arg_a)
export let lastBuildDate_ = (...arg_a)=>rss_tags_().lastBuildDate(...arg_a)
export let language_ = (...arg_a)=>rss_tags_().language(...arg_a)
export let link_ = (...arg_a)=>rss_tags_().link(...arg_a)
export let managingEditor_ = (...arg_a)=>rss_tags_().managingEditor(...arg_a)
export let pubDate_ = (...arg_a)=>rss_tags_().pubDate(...arg_a)
export let rating_ = (...arg_a)=>rss_tags_().rating(...arg_a)
export let rss_ = (...arg_a)=>rss_tags_().rss(...arg_a)
export let skipDays_ = (...arg_a)=>rss_tags_().skipDays(...arg_a)
export let skipHours_ = (...arg_a)=>rss_tags_().skipHours(...arg_a)
export let textInput_ = (...arg_a)=>rss_tags_().textInput(...arg_a)
export let title_ = (...arg_a)=>rss_tags_().title(...arg_a)
export let ttl_ = (...arg_a)=>rss_tags_().ttl(...arg_a)
export let webMaster_ = (...arg_a)=>rss_tags_().webMaster(...arg_a)
