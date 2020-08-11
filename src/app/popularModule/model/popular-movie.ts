import {Movie} from '../../appModule/models/movie';

export interface Movies {
  page: number,
  results: Movie[]
}

