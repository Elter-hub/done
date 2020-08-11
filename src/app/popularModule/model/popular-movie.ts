export interface PopularMovie {
  page: 1,
  results: OneMovie[]
}

export interface OneMovie {
  poster_path: string,
  overview: string,
  genre_ids: number[],
  id: number,
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path: string,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number
}
