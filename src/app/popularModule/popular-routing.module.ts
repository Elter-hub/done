import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PopularMovieComponent} from './components/popular-movie/popular-movie.component';
import {SharedModule} from '../sharedModule/shared.module';
import {PopularGuard} from './guards/popular.guard';
import {AllGenresGuard} from '../appModule/guards/all-genres.guard';

const routes: Routes = [
  {path: '', component: PopularMovieComponent, resolve: {popular: PopularGuard, genres: AllGenresGuard}}
  ];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopularRoutingModule { }
