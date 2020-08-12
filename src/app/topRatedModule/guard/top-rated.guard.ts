import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {Movies} from '../../popularModule/model/popular-movie';
import {FetchDataService} from '../services/fetch-data.service';

@Injectable({
  providedIn: 'root'
})
export class TopRatedGuard implements Resolve<Movies> {
  constructor(private fetchData: FetchDataService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movies> | Promise<Movies> | Movies {
    return this.fetchData.getTopRated();
  }
}
