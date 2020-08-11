import {Component, Input, OnInit} from '@angular/core';
import {Genre, Movie} from '../../appModule/models/movie';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import {VideoComponent} from '../../video-module/components/video/video.component';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.css'],
  animations: [
    trigger('movieAnimation', [
      transition('* => *', [
        query(':self', stagger('200ms', [
          animate('0.5s ease-in', keyframes([
            style({opacity: 0.3, transform: 'translateX(35%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(0%)', offset: 1}),
          ]))
        ]))
      ])
    ])
  ]
})
export class OneMovieComponent implements OnInit {
  gen: Genre[];
  @Input() movie: Movie;
  genres: string[][];

  constructor(private activatedRoute: ActivatedRoute,
              public dialog: MatDialog) {  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(val => this.gen = val.genres.genres);
    this.genres = this.movie.genre_ids.map(num => this.gen.filter(val => num == val.id))
      .map(val => val.map(val => val.name))
  }

    openDialog(id: number): void {
      const dialogRef = this.dialog.open(VideoComponent, {
        width: '600px',
        data: {movie: this.movie}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
}
