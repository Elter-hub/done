import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Videos} from '../model/video';

@Injectable({
  providedIn: 'root'
})
export class FetchVideoService {
  private API_KEY = 'd35a36cc38b2607b53b0f8c6d1c4fde8';

  constructor(private httpClient: HttpClient) { }

  getVideo(movieId: number): Observable<Videos> {
    return this.httpClient.get<Videos>(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.API_KEY}&language=uk-UA`)
  }
}
