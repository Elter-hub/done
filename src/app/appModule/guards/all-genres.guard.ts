import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {Genres } from '../models/movie';
import {FetchDataService} from '../services/fetchData.service';

@Injectable({
  providedIn: 'root'
})
export class AllGenresGuard implements Resolve<Genres> {
  constructor(private  fetchData: FetchDataService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Genres> | Promise<Genres> | Genres {
    return this.fetchData.getAllGenres();
  }
}
