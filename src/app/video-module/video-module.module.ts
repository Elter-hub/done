import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoModuleRoutingModule } from './video-module-routing.module';
import { VideoComponent } from './components/video/video.component';
import {BrowserModule} from '@angular/platform-browser';
import {YouTubePlayerModule} from '@angular/youtube-player';


@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    VideoModuleRoutingModule,
    YouTubePlayerModule,
  ],
  providers: []
})
export class VideoModuleModule { }
