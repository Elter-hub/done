import { Component, OnInit } from '@angular/core';
import {Movies} from '../../../popularModule/model/popular-movie';
import {ActivatedRoute, Router} from '@angular/router';
import {FetchDataService} from '../../services/fetch-data.service';
import {Movie} from '../../../appModule/models/movie';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  topRated: Movies;
  movies: Movie[];
  page: number;
  constructor(private activatedRoute: ActivatedRoute,
              private fetchData: FetchDataService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.topRated = value.topRated);
    this.fetchData.initializeMovieDetails(this.topRated);
    this.fetchData.currentPage$.subscribe(value => {
      console.log(value);
      this.movies = value.results;
      this.page = value.page;
    });
  }

  previousPage() {
    this.router.navigate(['topRated', this.page])
    this.fetchData.prevPage();
  }

  nextPage() {
    this.router.navigate(['topRated', this.page])
    this.fetchData.nextPage();
  }
}
