import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Movie } from "../models/movie";
import { Observable } from "rxjs/Observable";
import { MovieService } from "./movie.service";

@Injectable()
export class MovieResolverService implements Resolve<Movie> {
  

  constructor(private movieSvc:MovieService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Movie|Observable<Movie>|Promise<Movie> {
  
    return this.movieSvc.getMovieById(route.params.id);
  }

}
