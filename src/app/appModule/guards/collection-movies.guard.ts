import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {ExchangeDataService} from '../services/exchange-data.service';
import {MovieDetails} from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class CollectionMoviesGuard implements Resolve<MovieDetails> {
  constructor(private  exchangeData: ExchangeDataService) {  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetails> | Promise<MovieDetails> | MovieDetails {
    return this.exchangeData.getMovieDetails();
  }
}
