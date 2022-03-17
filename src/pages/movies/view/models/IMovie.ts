export type IDetailsMovie = {
 poster_path: string | null;
 adult: boolean;
 overview: string;
 release_date: string;
 genre_ids: number[];
 id: number;
 original_title: string;
 original_language: string;
 title: string;
 backdrop_path: string | null;
 popularity: number;
 vote_count: number;
 video: boolean;
 vote_average: number;
 status: string;
 tagline: string | null;
 imdb_id: string | null;
 homepage: string | null;
 budget: number;
 belongs_to_collection: null | object;
 genres: IGenreMovieItem[];
 production_companies: {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
 }[];
 spoken_languages: {
  iso_689_1: string;
  name: string;
 };
};

export type IGenreMovieItem = { id: number; name: string };
