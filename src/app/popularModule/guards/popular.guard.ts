import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {FetchDataService} from '../services/fetch-data.service';
import {Movies} from '../model/popular-movie';

@Injectable({
  providedIn: 'root'
})
export class PopularGuard implements Resolve<Movies> {
  constructor(private fetchData: FetchDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movies> | Promise<Movies> | Movies {
    return this.fetchData.getPopular();
  }



}
