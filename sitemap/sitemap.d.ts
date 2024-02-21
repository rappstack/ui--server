import type { Node_T, relement_env_T, tag_dom_T } from 'relementjs'
import type { tag_props_T } from 'relementjs/any'
/** @see {https://www.sitemaps.org/protocol.html} */
/** @see {https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps} */
/** @see {https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap} */
export declare function urlset_<env_T extends relement_env_T>(...arg_a:arg_a_T<'urlset'>):ret_T<env_T, 'urlset'>
export declare function url_<env_T extends relement_env_T>(...arg_a:arg_a_T<'url'>):ret_T<env_T, 'url'>
export declare function loc_<env_T extends relement_env_T>(...arg_a:arg_a_T<'loc'>):ret_T<env_T, 'loc'>
export declare function lastmod_<env_T extends relement_env_T>(...arg_a:arg_a_T<'lastmod'>):ret_T<env_T, 'lastmod'>
export declare function changefreq_<env_T extends relement_env_T>(freq:'always'|'hourly'|'daily'|'weekly'|'monthly'|'yearly'|'never'):ret_T<env_T, 'changefreq'>
export declare function priority_<env_T extends relement_env_T>(...arg_a:arg_a_T<'priority'>):ret_T<env_T, 'priority'>
export declare function image_image_<env_T extends relement_env_T>(...arg_a:arg_a_T<'image:image'>):ret_T<env_T, 'image:image'>
export declare function image_loc_<env_T extends relement_env_T>(...arg_a:arg_a_T<'image:loc'>):ret_T<env_T, 'image:loc'>
export declare function image_caption_<env_T extends relement_env_T>(...arg_a:arg_a_T<'image:caption'>):ret_T<env_T, 'image:caption'>
export declare function image_geo_location_<env_T extends relement_env_T>(...arg_a:arg_a_T<'image:geo_location'>):ret_T<env_T, 'image:geo_location'>
export declare function image_title_<env_T extends relement_env_T>(...arg_a:arg_a_T<'image:title'>):ret_T<env_T, 'image:title'>
export declare function image_license_<env_T extends relement_env_T>(...arg_a:arg_a_T<'image:license'>):ret_T<env_T, 'image:license'>
export declare function news_news_<env_T extends relement_env_T>(...arg_a:arg_a_T<'news:news'>):ret_T<env_T, 'news:news'>
export declare function news_publication_<env_T extends relement_env_T>(...arg_a:arg_a_T<'news:publication'>):ret_T<env_T, 'news:publication'>
export declare function news_name_<env_T extends relement_env_T>(...arg_a:arg_a_T<'news:name'>):ret_T<env_T, 'news:name'>
export declare function news_language_<env_T extends relement_env_T>(...arg_a:arg_a_T<'news:language'>):ret_T<env_T, 'news:language'>
export declare function news_publication_date_<env_T extends relement_env_T>(...arg_a:arg_a_T<'news:publication_date'>):ret_T<env_T, 'news:publication_date'>
export declare function news_title_<env_T extends relement_env_T>(...arg_a:arg_a_T<'news:title'>):ret_T<env_T, 'news:title'>
export declare function news_genres_<env_T extends relement_env_T>(...arg_a:arg_a_T<'news:genres'>):ret_T<env_T, 'news:genres'>
export declare function news_keywords_<env_T extends relement_env_T>(...arg_a:arg_a_T<'news:keywords'>):ret_T<env_T, 'news:keywords'>
export declare function news_stock_tickers_<env_T extends relement_env_T>(...arg_a:arg_a_T<'news:stock_tickers'>):ret_T<env_T, 'news:stock_tickers'>
export declare function video_video_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:video'>):ret_T<env_T, 'video:video'>
export declare function video_content_loc_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:content_loc'>):ret_T<env_T, 'video:content_loc'>
export declare function video_thumbnail_loc_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:thumbnail_loc'>):ret_T<env_T, 'video:thumbnail_loc'>
export declare function video_title_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:title'>):ret_T<env_T, 'video:title'>
export declare function video_description_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:description'>):ret_T<env_T, 'video:description'>
export declare function video_duration_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:duration'>):ret_T<env_T, 'video:duration'>
export declare function video_expiration_date_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:expiration_date'>):ret_T<env_T, 'video:expiration_date'>
export declare function video_rating_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:rating'>):ret_T<env_T, 'video:rating'>
export declare function video_view_count_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:view_count'>):ret_T<env_T, 'video:view_count'>
export declare function video_publication_date_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:publication_date'>):ret_T<env_T, 'video:publication_date'>
export declare function video_family_friendly_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:family_friendly'>):ret_T<env_T, 'video:family_friendly'>
export declare function video_tag_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:tag'>):ret_T<env_T, 'video:tag'>
export declare function video_category_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:category'>):ret_T<env_T, 'video:category'>
export declare function video_restriction_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:restriction'>):ret_T<env_T, 'video:restriction'>
export declare function video_price_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:price'>):ret_T<env_T, 'video:price'>
export declare function video_requires_subscription_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:requires_subscription'>):ret_T<env_T, 'video:requires_subscription'>
export declare function video_uploader_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:uploader'>):ret_T<env_T, 'video:uploader'>
export declare function video_live_<env_T extends relement_env_T>(...arg_a:arg_a_T<'video:live'>):ret_T<env_T, 'video:live'>
export type SitemapTagNameMap = {
	urlset:sitemap_urlset_element_T
	url:sitemap_url_element_T
	loc:sitemap_loc_element_T
	lastmod:sitemap_lastmod_element_T
	changefreq:sitemap_changefreq_element_T
	priority:sitemap_priority_element_T
	'image:image':sitemap_image_image_element_T
	'image:loc':sitemap_image_loc_element_T
	'image:caption':sitemap_image_caption_element_T
	'image:geo_location':sitemap_image_geo_location_element_T
	'image:title':sitemap_image_title_element_T
	'image:license':sitemap_image_license_element_T
	'news:news':sitemap_news_news_element_T
	'news:publication':sitemap_news_publication_element_T
	'news:name':sitemap_news_name_element_T
	'news:language':sitemap_news_language_element_T
	'news:publication_date':sitemap_news_publication_date_element_T
	'news:title':sitemap_news_title_element_T
	'news:genres':sitemap_news_genres_element_T
	'news:keywords':sitemap_news_keywords_element_T
	'news:stock_tickers':sitemap_news_stock_tickers_element_T
	'video:video':sitemap_video_video_element_T
	'video:content_loc':sitemap_video_content_loc_element_T
	'video:thumbnail_loc':sitemap_video_thumbnail_loc_element_T
	'video:title':sitemap_video_title_element_T
	'video:description':sitemap_video_description_element_T
	'video:duration':sitemap_video_duration_element_T
	'video:expiration_date':sitemap_video_expiration_date_element_T
	'video:rating':sitemap_video_rating_element_T
	'video:view_count':sitemap_video_view_count_element_T
	'video:publication_date':sitemap_video_publication_date_element_T
	'video:family_friendly':sitemap_video_family_friendly_element_T
	'video:tag':sitemap_video_tag_element_T
	'video:category':sitemap_video_category_element_T
	'video:restriction':sitemap_video_restriction_element_T
	'video:price':sitemap_video_price_element_T
	'video:requires_subscription':sitemap_video_requires_subscription_element_T
	'video:uploader':sitemap_video_uploader_element_T
	'video:live':sitemap_video_live_element_T
}
export interface sitemap_urlset_element_T extends sitemap_element_T {
	xmlns:string
	'xmlns:xsi'?:string
	'xsi:schemaLocation':string
	image_ns?:boolean
	news_ns?:boolean
	video_ns?:boolean
	__child_tag:sitemap_url_element_T
}
export interface sitemap_url_element_T extends sitemap_element_T {
	__child_tag:
		|sitemap_loc_element_T
		|sitemap_lastmod_element_T
		|sitemap_changefreq_element_T
		|sitemap_priority_element_T
		|sitemap_image_image_element_T
		|sitemap_news_news_element_T
		|sitemap_video_video_element_T
}
// @formatter:off
export interface sitemap_loc_element_T extends sitemap_element_T {}
export interface sitemap_lastmod_element_T extends sitemap_element_T {}
export interface sitemap_changefreq_element_T extends sitemap_element_T {}
export interface sitemap_priority_element_T extends sitemap_element_T {}
export interface sitemap_image_image_element_T extends sitemap_element_T {
	__child_tag:
		|sitemap_image_loc_element_T
		|sitemap_image_caption_element_T
		|sitemap_image_geo_location_element_T
		|sitemap_image_title_element_T
		|sitemap_image_license_element_T
}
export interface sitemap_image_loc_element_T extends sitemap_element_T {}
export interface sitemap_image_caption_element_T extends sitemap_element_T {}
export interface sitemap_image_geo_location_element_T extends sitemap_element_T {}
export interface sitemap_image_title_element_T extends sitemap_element_T {}
export interface sitemap_image_license_element_T extends sitemap_element_T {}
export interface sitemap_news_news_element_T extends sitemap_element_T {
	__child_tag:
		|sitemap_news_publication_element_T
		|sitemap_news_publication_date_element_T
		|sitemap_news_title_element_T
		|sitemap_news_genres_element_T
		|sitemap_news_keywords_element_T
		|sitemap_news_stock_tickers_element_T
}
export interface sitemap_news_publication_element_T extends sitemap_element_T {
	__child_tag:
		|sitemap_news_name_element_T
		|sitemap_news_language_element_T
}
export interface sitemap_news_name_element_T extends sitemap_element_T {}
export interface sitemap_news_language_element_T extends sitemap_element_T {}
export interface sitemap_news_genres_element_T extends sitemap_element_T {}
export interface sitemap_news_publication_date_element_T extends sitemap_element_T {}
export interface sitemap_news_title_element_T extends sitemap_element_T {}
export interface sitemap_news_keywords_element_T extends sitemap_element_T {}
export interface sitemap_news_stock_tickers_element_T extends sitemap_element_T {}
export interface sitemap_video_video_element_T extends sitemap_element_T {
	__child_tag:
		|sitemap_video_content_loc_element_T
		|sitemap_video_thumbnail_loc_element_T
		|sitemap_video_title_element_T
		|sitemap_video_description_element_T
		|sitemap_video_duration_element_T
		|sitemap_video_expiration_date_element_T
		|sitemap_video_rating_element_T
		|sitemap_video_view_count_element_T
		|sitemap_video_publication_date_element_T
		|sitemap_video_family_friendly_element_T
		|sitemap_video_tag_element_T
		|sitemap_video_category_element_T
		|sitemap_video_restriction_element_T
		|sitemap_video_price_element_T
		|sitemap_video_requires_subscription_element_T
		|sitemap_video_uploader_element_T
		|sitemap_video_live_element_T
}
export interface sitemap_video_content_loc_element_T extends sitemap_element_T {}
export interface sitemap_video_thumbnail_loc_element_T extends sitemap_element_T {}
export interface sitemap_video_title_element_T extends sitemap_element_T {}
export interface sitemap_video_description_element_T extends sitemap_element_T {}
export interface sitemap_video_duration_element_T extends sitemap_element_T {}
export interface sitemap_video_expiration_date_element_T extends sitemap_element_T {}
export interface sitemap_video_rating_element_T extends sitemap_element_T {}
export interface sitemap_video_view_count_element_T extends sitemap_element_T {}
export interface sitemap_video_publication_date_element_T extends sitemap_element_T {}
export interface sitemap_video_family_friendly_element_T extends sitemap_element_T {}
export interface sitemap_video_tag_element_T extends sitemap_element_T {}
export interface sitemap_video_category_element_T extends sitemap_element_T {}
export interface sitemap_video_restriction_element_T extends sitemap_element_T {
	relationship?:'allow'|'deny'
}
export interface sitemap_video_price_element_T extends sitemap_element_T {
	currency:string
}
export interface sitemap_video_requires_subscription_element_T extends sitemap_element_T {}
export interface sitemap_video_uploader_element_T extends sitemap_element_T {
	info?:string
}
export interface sitemap_video_live_element_T extends sitemap_element_T {}
export interface sitemap_element_T extends Node {}
type arg_a_T<tag_name_T extends keyof SitemapElementTagNameMap> =
	|[]
	|[tag_props_T<SitemapTagNameMap[tag_name_T]>, ...tag_dom_T<'any'>[]]
	|tag_dom_T<'any'>[]
// type arg_a_T<tag_name_T extends keyof SitemapTagNameMap> =
// 	|[]
// 	|[
// 		tag_props_T<SitemapElementTagNameMap[tag_name_T]>,
// 		...(
// 			SitemapElementTagNameMap[tag_name_T]['__child_tag'] extends object
// 				? SitemapElementTagNameMap[tag_name_T]['__child_tag']
// 				: tag_dom_T<'any'>
// 		)[]
// 	]
// 	|(
// 		SitemapElementTagNameMap[tag_name_T]['__child_tag'] extends object
// 			? SitemapElementTagNameMap[tag_name_T]['__child_tag']
// 			: tag_dom_T<'any'>
// 	)[]
// @formatter:on
type ret_T<env_T extends relement_env_T, tag_name_T extends keyof SitemapTagNameMap> =
	Node_T<env_T, SitemapTagNameMap[tag_name_T]>
