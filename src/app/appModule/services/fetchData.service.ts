import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Genres} from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private API_KEY = 'd35a36cc38b2607b53b0f8c6d1c4fde8';

  constructor(private httpClient: HttpClient) { }

  getAllGenres(): Observable<Genres> {
    return this.httpClient.get<Genres>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.API_KEY}&language=uk-UA`)
  }
}
