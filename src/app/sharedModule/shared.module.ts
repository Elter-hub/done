import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {OneMovieComponent} from './one-movie/one-movie.component';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    OneMovieComponent,
  ],
  exports: [
    OneMovieComponent
  ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        MatCardModule,
        MatRippleModule,
        MatButtonModule
    ]
})
export class SharedModule { }
