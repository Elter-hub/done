import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Genres, Movie, MovieDetails} from '../../models/movie';
import {ActivatedRoute, Router} from '@angular/router';
import {ExchangeDataService} from '../../services/exchange-data.service';

@Component({
  selector: 'app-collection-movies',
  templateUrl: './collection-movies.component.html',
  styleUrls: ['./collection-movies.component.css'],
})
export class CollectionMoviesComponent implements OnInit {
  movieDetails: MovieDetails;
  movies: Movie[];
  name: string;
  description: string;
  genres: Genres[];
  constructor(private exchangeData: ExchangeDataService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.movieDetails = value.collection);
    this.exchangeData.initializeMovieDetails();
    this.exchangeData.currentCollection.subscribe(val => this.movieDetails = val);
  }

  incrementId(id: string): void {
    this.exchangeData.changeToRightCollection();
    this.router.navigate(['collection', id])
  }

  decrementId(id: string): void {
    this.exchangeData.changeToLeftCollection();
    this.router.navigate(['collection', id])
  }

  showMovies(): void {
    this.router.navigate(['movies']);
  }
}
