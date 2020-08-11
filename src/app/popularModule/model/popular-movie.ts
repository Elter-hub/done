import {Movie} from '../../appModule/models/movie';

export interface PopularMovie {
  page: number,
  results: Movie[]
}

