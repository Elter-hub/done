import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRatedRoutingModule } from './top-rated-routing.module';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import {SharedModule} from '../sharedModule/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [TopRatedComponent],
  imports: [
    CommonModule,
    TopRatedRoutingModule,
    SharedModule,
    MatIconModule,
    ScrollingModule,
    MatButtonModule
  ]
})
export class TopRatedModule { }
