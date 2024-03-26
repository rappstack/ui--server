/** @see {https://ogp.me/} */
/** @see {https://github.com/bradgarropy/next-seo/blob/master/src/components/Facebook/Facebook.tsx} */
import { type og_type_T } from '@rappstack/domain--server/og'
import { type tag_dom_T } from 'relementjs'
import { maybe__meta_ } from '../meta/index.js'
/** @see {https://ogp.me/} */
export function og__meta_fragment_($p:og_T) {
	let {
		title,
		type,
		image,
		url,
		audio,
		description,
		determiner,
		locale,
		locale_alternate,
		site_name,
		video,
	} = $p
	return [
		maybe__meta_({ property: 'og:title', content: title }),
		maybe__meta_({ property: 'og:type', content: type }),
		maybe__meta_({ property: 'og:image', content: image }),
		maybe__meta_({ property: 'og:url', content: url }),
		maybe__meta_({ property: 'og:audio', content: audio }),
		maybe__meta_({ property: 'og:description', content: description }),
		maybe__meta_({ property: 'og:determiner', content: determiner }),
		maybe__meta_({ property: 'og:locale', content: locale }),
		maybe__meta_({ property: 'og:locale_alternate', content: locale_alternate }),
		maybe__meta_({ property: 'og:site_name', content: site_name }),
		maybe__meta_({ property: 'og:video', content: video }),
	]
}
export function og_image__meta_fragment_($p:og_image_T) {
	// og:image:url - Identical to og:image.
	// og:image:secure_url - An alternate url to use if the webpage requires HTTPS.
	// og:image:type - A MIME type for this image.
	// og:image:width - The number of pixels wide.
	// og:image:height - The number of pixels high.
	// og:image:alt - A description of what is in the image (not a caption). If the page specifies an og:image it should specify og:image:alt.
	const { secure_url, type, width, height, alt } = $p
	return [
		maybe__meta_({ property: 'og:image:secure_url', content: secure_url }),
		maybe__meta_({ property: 'og:image:type', content: type }),
		maybe__meta_({ property: 'og:image:width', content: width }),
		maybe__meta_({ property: 'og:image:height', content: height }),
		maybe__meta_({ property: 'og:image:alt', content: alt }),
	]
}
export function og_video__meta_fragment_($p:og_video_T) {
	const { secure_url, type, width, height, alt } = $p
	return [
		maybe__meta_({ property: 'og:video:secure_url', content: secure_url }),
		maybe__meta_({ property: 'og:video:type', content: type }),
		maybe__meta_({ property: 'og:video:width', content: width }),
		maybe__meta_({ property: 'og:video:height', content: height }),
		maybe__meta_({ property: 'og:video:alt', content: alt }),
	]
}
export function og_audio__meta_fragment_($p:og_audio_T) {
	const { secure_url, type } = $p
	return [
		maybe__meta_({ property: 'og:audio:secure_url', content: secure_url }),
		maybe__meta_({ property: 'og:audio:type', content: type }),
	]
}
export function og_music_song__meta_fragment_($p:og_music_song_T):tag_dom_T {
	// music:duration - integer >=1 - The song's length in seconds.
	// music:album - music.album array - The album this song is from.
	// music:album:disc - integer >=1 - Which disc of the album this song is on.
	// music:album:track - integer >=1 - Which track this song is.
	// music:musician - profile array - The musician that made this song.
	let { url, duration, disc, track, album_a1, musician_a1 } = $p
	return [
		maybe__meta_({ property: 'og:music:song', content: url }),
		maybe__meta_({ property: 'og:music:duration', content: duration }), ,
		maybe__meta_({ property: 'og:music:song:album:disc', content: disc }),
		maybe__meta_({ property: 'og:music:song:album:track', content: track }),
		(album_a1 ?? []).map(album=>
			og_music_album__meta_fragment_(album)),
		(musician_a1 ?? []).map(musician=>
			og_profile__meta_fragment_({ ...musician, prefix: 'og:music:musician' })),
	]
}
export function og_music_album__meta_fragment_($p:og_music_album_T):tag_dom_T {
	// music:song - music.song - The song on this album.
	// music:song:disc - integer >=1 - The same as music:album:disc but in reverse.
	// music:song:track - integer >=1 - The same as music:album:track but in reverse.
	// music:musician - profile - The musician that made this song.
	// music:release_date - datetime - The date the album was released.
	let { url, disc, track, song_a1, musician_a1, release_date } = $p
	return [
		maybe__meta_({ property: 'og:music:album', content: url }),
		maybe__meta_({ property: 'og:music:album:disc', content: disc }),
		maybe__meta_({ property: 'og:music:album:track', content: track }),
		(song_a1 ?? []).map(song=>
			og_music_song__meta_fragment_(song)),
		(musician_a1 ?? []).map(musician=>
			og_profile__meta_fragment_({ ...musician, prefix: 'og:music:musician' })),
		maybe__meta_({ property: 'og:music:release_date', content: release_date }),
	]
}
export function og_music_playlist__meta_fragment_($p:og_music_playlist_T) {
	// music:song - Identical to the ones on music.album
	// music:song:disc
	// music:song:track
	// music:creator - profile - The creator of this playlist.
	let { song_a1, creator } = $p
	return [
		(song_a1 ?? []).map(song=>
			og_music_song__meta_fragment_(song)),
		creator
			? og_profile__meta_fragment_({ ...creator, prefix: 'og:music:creator' })
			: null,
	]
}
export function og_music_radio_station__meta_fragment_($p:og_music_radio_station_T) {
	// music:creator - profile - The creator of this station.
	const { creator } = $p
	return [
		creator
			? og_profile__meta_fragment_({ ...creator, prefix: 'og:music:creator' })
			: null
	]
}
export function og_video_movie__meta_fragment_($p:og_video_movie_T) {
	// video:actor - profile array - Actors in the movie.
	// video:actor:role - string - The role they played.
	// video:director - profile array - Directors of the movie.
	// video:writer - profile array - Writers of the movie.
	// video:duration - integer >=1 - The movie's length in seconds.
	// video:release_date - datetime - The date the movie was released.
	// video:tag - string array - Tag words associated with this movie.
	let { actor_a1, director_a1, writer_a1, duration, release_date, tag_a1 } = $p
	return [
		(actor_a1 ?? []).map(actor=>
			og_profile__meta_fragment_({ ...actor, prefix: 'og:video:actor' })),
		(director_a1 ?? []).map(director=>
			og_profile__meta_fragment_({ ...director, prefix: 'og:video:director' })),
		(writer_a1 ?? []).map(writer=>
			og_profile__meta_fragment_({ ...writer, prefix: 'og:video:writer' })),
		maybe__meta_({ property: 'og:video:duration', content: duration }),
		maybe__meta_({ property: 'og:video:release_date', content: release_date }),
		(tag_a1 ?? []).map(tag=>maybe__meta_({ property: 'og:video:tag', content: tag })),
	]
}
export function og_video_episode__meta_fragment_($p:og_video_episode_T) {
	const { series } = $p
	return [
		og_video_movie__meta_fragment_($p),
		series
			? og_video_tv_show__meta_fragment_({ ...series, prefix: 'og:video:series' })
			: null
	]
}
export function og_video_tv_show__meta_fragment_($p:og_video_tv_show_T&{ prefix?:string }) {
	return og_video_movie__meta_fragment_($p)
}
export function og_video_other__meta_fragment_($p:og_video_tv_show_T) {
	return og_video_movie__meta_fragment_($p)
}
export function og_article__meta_fragment_($p:og_article_T) {
	const { published_time, modified_time, expiration_time, author_a1, section, tag_a1 } = $p
	return [
		maybe__meta_({ property: 'og:article:published_time', content: published_time }),
		maybe__meta_({ property: 'og:article:modified_time', content: modified_time }),
		maybe__meta_({ property: 'og:article:expiration_time', content: expiration_time }),
		(author_a1 ?? []).map(author=>
			og_profile__meta_fragment_({ ...author, prefix: 'og:article:author' })),
		maybe__meta_({ property: 'og:article:section', content: section }),
		(tag_a1 ?? []).map(tag=>
			maybe__meta_({ property: 'og:article:tag', content: tag })),
	]
}
export function og_book__meta_fragment_($p:og_book_T) {
	const { author_a1, isbn, release_date, tag_a1 } = $p
	return [
		(author_a1 ?? []).map(author=>
			og_profile__meta_fragment_({ ...author, prefix: 'og:book:author' })),
		maybe__meta_({ property: 'og:book:isbn', content: isbn }),
		maybe__meta_({ property: 'og:book:release_date', content: release_date }),
		(tag_a1 ?? []).map(tag=>
			maybe__meta_({ property: 'og:book:tag', content: tag })),
	]
}
export function og_profile__meta_fragment_($p:og_profile_T&{ prefix?:string }) {
	let { url, first_name, last_name, username, gender, prefix, role } = $p
	prefix ??= 'og:profile'
	return [
		maybe__meta_({ property: prefix, content: url }),
		maybe__meta_({ property: prefix + ':first_name', content: first_name }),
		maybe__meta_({ property: prefix + ':last_name', content: last_name }),
		maybe__meta_({ property: prefix + ':username', content: username }),
		maybe__meta_({ property: prefix + ':gender', content: gender }),
		maybe__meta_({ property: prefix + ':role', content: role }),
	]
}
export type og_T = {
	// og:title - The title of your object as it should appear within the graph, e.g., "The Rock".
	title:string
	// og:type - The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
	type:og_type_T
	// og:image - An image URL which should represent your object within the graph.
	image:string
	// og:url - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/".
	url:string
	// og:audio - A URL to an audio file to accompany this object.
	audio?:string
	// og:description - A one to two sentence description of your object.
	description?:string
	// og:determiner - The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto). If auto is chosen, the consumer of your data should chose between "a" or "an". Default is "" (blank).
	determiner?:string
	// og:locale - The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US.
	locale?:string
	// og:locale:alternate - An array of other locales this page is available in.
	locale_alternate?:string
	// og:site_name - If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
	site_name?:string
	// og:video - A URL to a video file that complements this object.
	video?:string
}
export type og_image_T = {
	// og:image:secure_url - An alternate url to use if the webpage requires HTTPS.
	secure_url?:string
	// og:image:type - A MIME type for this image.
	type?:string
	// og:image:width - The number of pixels wide.
	width?:number
	// og:image:height - The number of pixels high.
	height?:number
	// og:image:alt - A description of what is in the image (not a caption). If the page specifies an og:image it should specify og:image:alt.
	alt?:string
}
export type og_audio_T = {
	secure_url?:string
	type?:string
}
export type og_video_T = og_image_T
export type og_music_song_T = {
	url?:string
	// music:duration - integer >=1 - The song's length in seconds.
	duration?:number
	// music:song:disc - integer >=1 - The same as music:album:disc but in reverse.
	disc?:number
	// music:song:track - integer >=1 - The same as music:album:track but in reverse.
	track?:number
	// music:song - music.song - The song on this album.
	song?:string
	// music.album array - The album this song is from.
	album_a1?:og_music_album_T[]
	// music:musician - profile array - The musician that made this song.
	musician_a1?:og_profile_T[]
}
export type og_music_album_T = {
	url?:string
	// music:album - music.album array - The album this song is from.
	album?:string
	// music:album:disc - integer >=1 - Which disc of the album this song is on.
	disc?:number
	// music:album:track - integer >=1 - Which track this song is.
	track?:number
	// music:song - music.song - The song on this album.
	song_a1?:og_music_song_T[]
	// music:musician - profile array - The musician that made this song.
	musician_a1?:og_profile_T[]
	// 	music:release_date - datetime - The date the album was released.
	release_date?:string
}
export type og_music_playlist_T = {
	// music:song - Identical to the ones on music.album
	song_a1?:og_music_song_T[]
	// music:song:disc
	// music:song:track
	// music:creator - profile - The creator of this playlist.
	creator?:og_profile_T
}
export type og_music_radio_station_T = {
	// music:creator - profile - The creator of this station.
	creator?:og_profile_T
}
export type og_video_movie_T = og_video_T&{
	// video:actor - profile array - Actors in the movie.
	actor_a1?:og_profile_T[]
	// video:director - profile array - Directors of the movie.
	director_a1?:og_profile_T[]
	// video:writer - profile array - Writers of the movie.
	writer_a1?:og_profile_T[]
	// video:duration - integer >=1 - The movie's length in seconds.
	duration?:number
	// video:release_date - datetime - The date the movie was released.
	release_date?:string
	// video:tag - string array - Tag words associated with this movie.
	tag_a1?:string[]
}
export type og_video_episode_T = og_video_movie_T&{
	series?:og_video_tv_show_T
}
export type og_video_tv_show_T = og_video_movie_T
export type og_video_other_T = og_video_movie_T
export type og_profile_T = {
	url?:string
	// profile:first_name - string - A name normally given to an individual by a parent or self-chosen.
	first_name?:string
	// profile:last_name - string - A name inherited from a family or marriage and by which the individual is commonly known.
	last_name?:string
	// profile:username - string - A short unique string to identify them.
	username?:string
	// profile:gender - enum(male, female) - Their gender.
	gender?:'male'|'female'
	// video:actor:role - string - The role they played.
	role?:string
}
export type og_article_T = {
	// article:published_time - datetime - When the article was first published.
	published_time?:string
	// article:modified_time - datetime - When the article was last changed.
	modified_time?:string
	// article:expiration_time - datetime - When the article is out of date after.
	expiration_time?:string
	// article:author - profile array - Writers of the article.
	author_a1?:og_profile_T[]
	// article:section - string - A high-level section name. E.g. Technology
	section?:string
	// article:tag - string array - Tag words associated with this article.
	tag_a1?:string[]
}
export type og_book_T = {
	author_a1?:og_profile_T[]
	isbn?:string
	release_date?:string
	tag_a1?:string[]
}
