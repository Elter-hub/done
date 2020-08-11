import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavigationComponent} from './components/navigation/navigation.component';
import {CollectionMoviesComponent} from './components/collection-movies/collection-movies.component';
import {CollectionMoviesGuard} from './guards/collection-movies.guard';
import {AllGenresGuard} from './guards/all-genres.guard';

const routes: Routes = [
  {path: '', component: NavigationComponent, children: [
      {
        path: 'collection/:id', component: CollectionMoviesComponent,
        resolve: {collection: CollectionMoviesGuard, genres: AllGenresGuard}
      },
      {
        path: 'popular/:id', loadChildren: () => import('./../popularModule/popular.module').then(m => m.PopularModule)
      }
    ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
