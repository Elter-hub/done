import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FetchDataService} from '../../services/fetch-data.service';
import {OneMovie, PopularMovie} from '../../model/popular-movie';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {
  popular: PopularMovie;
  movies: OneMovie[];
  page: number;
  constructor(private activatedRoute: ActivatedRoute,
              private fetchData: FetchDataService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.popular = value.popular);
    this.fetchData.initializeMovieDetails(this.popular);
    this.fetchData.currentPage$.subscribe(va => {
      this.movies = va.results;
      this.page = va.page;
    });
  }

  previousPage() {
    this.router.navigate(['popular', this.page])
    this.fetchData.prevPage();
  }

  nextPage() {
    this.router.navigate(['popular', this.page])
    this.fetchData.nextPage();
  }
}
