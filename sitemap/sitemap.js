import { tagsNS } from 'relementjs'
let _tagsNS, sitemap_tags, _undefined
export function sitemap_tags_() {
	if (_tagsNS !== tagsNS) {
		_tagsNS = tagsNS
		sitemap_tags = _tagsNS?.('http://www.sitemaps.org/schemas/sitemap/0.9')
	}
	return sitemap_tags
}
export let urlset_ = (...a)=>{
	let [params, ...children] =
		// DOM elements are objects with a custom prototype
		Object.getPrototypeOf(a[0] ?? 0) === Object.prototype
			? a
			: [{}, ...a]
	params['xmlns'] ??= 'http://www.sitemaps.org/schemas/sitemap/0.9'
	params['xmlns:image'] ??= params.image_ns ? 'http://www.google.com/schemas/sitemap-image/1.1' : _undefined
	params['xmlns:news'] ??= params.news_ns ? 'http://www.google.com/schemas/sitemap-news/0.9' : _undefined
	params['xmlns:video'] ??= params.video_ns ? 'http://www.google.com/schemas/sitemap-video/1.1' : _undefined
	return sitemap_tags_().urlset(params, ...children)
}
export let url_ = (...arg_a)=>sitemap_tags_().url(...arg_a)
export let loc_ = (...arg_a)=>sitemap_tags_().loc(...arg_a)
export let lastmod_ = (...arg_a)=>sitemap_tags_().lastmod(...arg_a)
export let changefreq_ = (...arg_a)=>sitemap_tags_().changefreq(...arg_a)
export let priority_ = (...arg_a)=>sitemap_tags_().priority(...arg_a)
export let image_image_ = (...arg_a)=>sitemap_tags_()['image:image'](...arg_a)
export let image_loc_ = (...arg_a)=>sitemap_tags_()['image:loc'](...arg_a)
export let image_caption_ = (...arg_a)=>sitemap_tags_()['image:caption'](...arg_a)
export let image_geo_location_ = (...arg_a)=>sitemap_tags_()['image:geo_location'](...arg_a)
export let image_title_ = (...arg_a)=>sitemap_tags_()['image:title'](...arg_a)
export let image_license_ = (...arg_a)=>sitemap_tags_()['image:license'](...arg_a)
export let news_news_ = (...arg_a)=>sitemap_tags_()['news:news'](...arg_a)
export let news_publication_ = (...arg_a)=>sitemap_tags_()['news:publication'](...arg_a)
export let news_name_ = (...arg_a)=>sitemap_tags_()['news:name'](...arg_a)
export let news_language_ = (...arg_a)=>sitemap_tags_()['news:language'](...arg_a)
export let news_publication_date_ = (...arg_a)=>sitemap_tags_()['news:publication_date'](...arg_a)
export let news_title_ = (...arg_a)=>sitemap_tags_()['news:title'](...arg_a)
export let news_genres_ = (...arg_a)=>sitemap_tags_()['news:genres'](...arg_a)
export let news_keywords_ = (...arg_a)=>sitemap_tags_()['news:keywords'](...arg_a)
export let news_stock_tickers_ = (...arg_a)=>sitemap_tags_()['news:stock_tickers'](...arg_a)
export let video_video_ = (...arg_a)=>sitemap_tags_()['video:video'](...arg_a)
export let video_content_loc_ = (...arg_a)=>sitemap_tags_()['video:content_loc'](...arg_a)
export let video_thumbnail_loc_ = (...arg_a)=>sitemap_tags_()['video:thumbnail_loc'](...arg_a)
export let video_title_ = (...arg_a)=>sitemap_tags_()['video:title'](...arg_a)
export let video_description_ = (...arg_a)=>sitemap_tags_()['video:description'](...arg_a)
export let video_duration_ = (...arg_a)=>sitemap_tags_()['video:duration'](...arg_a)
export let video_expiration_date_ = (...arg_a)=>sitemap_tags_()['video:expiration_date'](...arg_a)
export let video_rating_ = (...arg_a)=>sitemap_tags_()['video:rating'](...arg_a)
export let video_view_count_ = (...arg_a)=>sitemap_tags_()['video:view_count'](...arg_a)
export let video_publication_date_ = (...arg_a)=>sitemap_tags_()['video:publication_date'](...arg_a)
export let video_family_friendly_ = (...arg_a)=>sitemap_tags_()['video:family_friendly'](...arg_a)
export let video_tag_ = (...arg_a)=>sitemap_tags_()['video:tag'](...arg_a)
export let video_category_ = (...arg_a)=>sitemap_tags_()['video:category'](...arg_a)
export let video_restriction_ = (...arg_a)=>sitemap_tags_()['video:restriction'](...arg_a)
export let video_requires_subscription_ = (...arg_a)=>sitemap_tags_()['video:requires_subscription'](...arg_a)
export let video_uploader_ = (...arg_a)=>sitemap_tags_()['video:uploader'](...arg_a)
export let video_live_ = (...arg_a)=>sitemap_tags_()['video:live'](...arg_a)
