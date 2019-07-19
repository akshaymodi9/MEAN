import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service";
import { Movie } from "../../models/movie";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private movies: Movie[];
  private moviesObsvr:Observable<Movie[]>;
  constructor(private movieSvc: MovieService) {
    this.moviesObsvr=this.movieSvc.getMovies()
    
    // this.movieSvc.getMovies()
    //   .subscribe(
    //     data =>{ 
    //       console.log(data)
    //       this.movies = data
    //     },
    //       err => console.log(err)
    //   )
  }

  ngOnInit() {
  }

}
