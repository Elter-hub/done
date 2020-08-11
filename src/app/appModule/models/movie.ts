export interface Movie {
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  id: number;
}

export interface MovieDetails {
  name: string;
  description: string;
  created_by: string;
  poster_path: string;
  id: string;
  items: Movie[];
}

export interface Genre {
  id: number;
  name: string;
}
export interface Genres {
 genres: Genre[];
}


