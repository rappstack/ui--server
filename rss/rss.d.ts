import type { Node_T, relement_env_T, tag_dom_T } from 'relementjs'
import type { tag_props_T } from 'relementjs/any'
// @formatter:off
export declare function author_<env_T extends relement_env_T>(...arg_a:arg_a_T<'author'>):ret_T<env_T, 'author'>
export declare function category_<env_T extends relement_env_T>(...arg_a:arg_a_T<'category'>):ret_T<env_T, 'category'>
export declare function channel_<env_T extends relement_env_T>(...arg_a:arg_a_T<'channel'>):ret_T<env_T, 'channel'>
export declare function cloud_<env_T extends relement_env_T>(...arg_a:arg_a_T<'cloud'>):ret_T<env_T, 'cloud'>
export declare function copyright_<env_T extends relement_env_T>(...arg_a:arg_a_T<'copyright'>):ret_T<env_T, 'copyright'>
export declare function description_<env_T extends relement_env_T>(...arg_a:arg_a_T<'description'>):ret_T<env_T, 'description'>
export declare function docs_<env_T extends relement_env_T>(...arg_a:arg_a_T<'docs'>):ret_T<env_T, 'docs'>
export declare function generator_<env_T extends relement_env_T>(...arg_a:arg_a_T<'generator'>):ret_T<env_T, 'generator'>
export declare function guid_<env_T extends relement_env_T>(...arg_a:arg_a_T<'guid'>):ret_T<env_T, 'guid'>
export declare function image_<env_T extends relement_env_T>(...arg_a:arg_a_T<'image'>):ret_T<env_T, 'image'>
export declare function item_<env_T extends relement_env_T>(...arg_a:arg_a_T<'item'>):ret_T<env_T, 'item'>
export declare function lastBuildDate_<env_T extends relement_env_T>(...arg_a:arg_a_T<'lastBuildDate'>):ret_T<env_T, 'lastBuildDate'>
export declare function language_<env_T extends relement_env_T>(...arg_a:arg_a_T<'language'>):ret_T<env_T, 'language'>
export declare function link_<env_T extends relement_env_T>(...arg_a:arg_a_T<'link'>):ret_T<env_T, 'link'>
export declare function managingEditor_<env_T extends relement_env_T>(...arg_a:arg_a_T<'managingEditor'>):ret_T<env_T, 'managingEditor'>
export declare function pubDate_<env_T extends relement_env_T>(...arg_a:arg_a_T<'pubDate'>):ret_T<env_T, 'pubDate'>
export declare function rating_<env_T extends relement_env_T>(...arg_a:arg_a_T<'rating'>):ret_T<env_T, 'rating'>
export declare function rss_<env_T extends relement_env_T>(...arg_a:arg_a_T<'rss'>):ret_T<env_T, 'rss'>
export declare function skipDays_<env_T extends relement_env_T>(...arg_a:arg_a_T<'skipDays'>):ret_T<env_T, 'skipDays'>
export declare function skipHours_<env_T extends relement_env_T>(...arg_a:arg_a_T<'skipHours'>):ret_T<env_T, 'skipHours'>
export declare function textInput_<env_T extends relement_env_T>(...arg_a:arg_a_T<'textInput'>):ret_T<env_T, 'textInput'>
export declare function title_<env_T extends relement_env_T>(...arg_a:arg_a_T<'title'>):ret_T<env_T, 'title'>
export declare function ttl_<env_T extends relement_env_T>(...arg_a:arg_a_T<'ttl'>):ret_T<env_T, 'ttl'>
export declare function webMaster_<env_T extends relement_env_T>(...arg_a:arg_a_T<'webMaster'>):ret_T<env_T, 'webMaster'>
export interface RssElementTagNameMap {
	author:RssChannelElement
	category:RssChannelElement
	channel:RssChannelElement
	cloud:RssChannelElement
	copyright:RssChannelElement
	description:RssTextElement
	docs:RssTextElement
	generator:RssItemElement
	guid:RssItemElement
	image:RssItemElement
	item:RssItemElement
	lastBuildDate:RssItemElement
	language:RssTextElement
	link:RssTextElement
	managingEditor:RssTextElement
	pubDate:RssTextElement
	rating:RssElement
	rss:RssElement
	skipDays:RssElement
	skipHours:RssElement
	textInput:RssTextElement
	title:RssTextElement
	ttl:RssTextElement
	webMaster:RssTextElement
}
export interface RssElement extends Node {}
export interface RssChannelElement extends RssElement {}
export interface RssItemElement extends RssElement {}
export interface RssTextElement extends RssElement {}
// @formatter:on
type arg_a_T<tag_name_T extends keyof RssElementTagNameMap> =
	|[]
	|[tag_props_T<RssElementTagNameMap[tag_name_T]>, ...tag_dom_T<'any'>[]]
	|tag_dom_T<'any'>[]
type ret_T<env_T extends relement_env_T, tag_name_T extends keyof RssElementTagNameMap> =
	Node_T<env_T, RssElementTagNameMap[tag_name_T]>
