import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Movie } from '../models/movie';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {

  readonly API_URL: string = "http://localhost:5000/api/movies"
  constructor(private http: Http) {

  }
  public getMovies(): Observable<Movie[]> {
    return this.http.get(this.API_URL)
      .map(res => res.json())
      .catch(err => Observable.throw(err))

  }

  public add(data: FormData): Observable<any> {
    return this.http.post(this.API_URL, data)
      .map(res => res.json())
      .catch(err=>Observable.throw(err))
      
  }

  public getMovieById(id:string):Observable<Movie>{
    var url=`${this.API_URL}/${id}`;
  return this.http.get(url)
    .map(res=> res.json())
    .catch(err=> Observable.throw(err))
  }

  public updateMovies(id:string,data:FormData):Observable<Movie>{
    var url=`${this.API_URL}/${id}`;
    return this.http.put(url,data)
          .map(res=>res.json())
          .catch(err=>Observable.throw(err))
  }

}
