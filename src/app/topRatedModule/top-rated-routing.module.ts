import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopRatedComponent} from './components/top-rated/top-rated.component';
import {TopRatedGuard} from './guard/top-rated.guard';
import {AllGenresGuard} from '../appModule/guards/all-genres.guard';

const routes: Routes = [
  {path: '', component: TopRatedComponent, resolve: {topRated: TopRatedGuard, genres: AllGenresGuard}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopRatedRoutingModule { }
