import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {FetchDataService} from '../services/fetch-data.service';
import {PopularMovie} from '../model/popular-movie';

@Injectable({
  providedIn: 'root'
})
export class PopularGuard implements Resolve<PopularMovie> {
  constructor(private fetchData: FetchDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PopularMovie> | Promise<PopularMovie> | PopularMovie {
    return this.fetchData.getPopular();
  }



}
