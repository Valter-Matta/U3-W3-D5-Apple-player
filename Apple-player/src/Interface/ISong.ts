// Interfaccia per l'album
interface Album {
	id: number;
	title: string;
	cover: string;
	cover_small: string;
	cover_medium: string;
	cover_big: string;
	cover_xl: string;
	md5_image: string;
	tracklist: string;
	type: string;
}

// Interfaccia per l'artista
interface Artist {
	id: number;
	name: string;
	link: string;
	picture: string;
	picture_small: string;
	picture_medium: string;
	picture_big: string;
	picture_xl: string;
	tracklist: string;
	type: string;
}

// Interfaccia per la traccia (track)
interface ISongs {
	id: number;
	title: string;
	title_short: string;
	title_version?: string; // Può essere undefined
	link: string;
	duration: number;
	rank: number;
	preview: string;
	readable: boolean;
	md5_image: string;
	explicit_lyrics: boolean;
	explicit_content_cover: number;
	explicit_content_lyrics: number;
	album: Album;
	artist: Artist;
	type: string;
}

export default ISongs;
