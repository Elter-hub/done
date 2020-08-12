import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FetchVideoService} from '../../services/fetch-video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  oneMovie: any;
  link: string;

  constructor(@Inject(MAT_DIALOG_DATA) data,
              private fetchVideo: FetchVideoService) {
    this.oneMovie = data;
  }

  ngOnInit(): void {
    this.fetchVideo.getVideo(this.oneMovie.movie.id).subscribe(val =>{
      if (val.results.length > 0)
      this.link = val.results[0].key;
    })
  }
}
