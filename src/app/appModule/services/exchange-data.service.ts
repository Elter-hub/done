import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {MovieDetails} from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {
  private API_KEY = 'd35a36cc38b2607b53b0f8c6d1c4fde8';
  movieId = 1;
  emptyCollection: MovieDetails;

  constructor(private httpClient: HttpClient) { }

  collection: BehaviorSubject<MovieDetails> = new BehaviorSubject<MovieDetails>(this.emptyCollection);
  currentCollection = this.collection.asObservable();

  initializeMovieDetails(details: MovieDetails): void {
    this.collection.next(details);
  }

  changeToLeftCollection(): void{
    if (this.movieId > 1) {
      this.movieId--;
      this.getMovieDetails().subscribe(val => this.collection.next(val));
    }
  }
  changeToRightCollection(): void{
    this.movieId++;
    this.getMovieDetails().subscribe(val => this.collection.next(val));
  }

  getMovieDetails(): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(`https://api.themoviedb.org/3/list/${this.movieId}?api_key=${this.API_KEY}&language=uk-UA`);
  }

  getSimilar(): any {
    return this.httpClient.get<any>(`https://api.themoviedb.org/3/movie/${this.movieId}/similar?api_key=${this.API_KEY}&language=uk-UA`);
  }
}
