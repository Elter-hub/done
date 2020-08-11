import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { PopularMovie} from '../model/popular-movie';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private API_KEY = 'd35a36cc38b2607b53b0f8c6d1c4fde8';
  whichPage = 1;
  emptyValue: PopularMovie;

  constructor(private httpClient: HttpClient) { }

  page: BehaviorSubject<PopularMovie> = new BehaviorSubject<PopularMovie>(this.emptyValue);
  currentPage$ = this.page.asObservable();

  initializeMovieDetails(movie: PopularMovie): void {
    this.page.next(movie);
  }

  nextPage(): void {
    this.whichPage++;
    this.getPopular().subscribe(val => this.page.next(val));
  }

  prevPage(): void {
    if (this.whichPage > 0) {
      this.whichPage--;
      this.getPopular().subscribe(val => this.page.next(val));
    }
  }

  getPopular(): Observable<PopularMovie> {
    return this.httpClient.get<PopularMovie>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=uk-UA&page=${this.whichPage}`)
  }
}
