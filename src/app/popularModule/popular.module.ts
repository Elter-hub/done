import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularRoutingModule } from './popular-routing.module';
import { PopularMovieComponent } from './components/popular-movie/popular-movie.component';
import {SharedModule} from '../sharedModule/shared.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [PopularMovieComponent],
  imports: [
    CommonModule,
    PopularRoutingModule,
    SharedModule,
    ScrollingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class PopularModule {
}
