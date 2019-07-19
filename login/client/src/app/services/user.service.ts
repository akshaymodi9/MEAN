import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { user } from '../models/user';



@Injectable()
export class UserService {

  readonly API_URL:string="http://localhost:3500/api"
  constructor(private http:Http) { }

  public addUser(obj):Observable<user>{
    return this.http.post(this.API_URL,obj)
    .map(res=>res.json())
    .catch(err=>err.json())
  }

  public getUser(obj):Observable<user>{
    var login="login";
    var url=`${this.API_URL}/${login}`;
    console.log(url)
    return this.http.post(url,obj)
    .map(res=>res.json())
    .catch(err=>err.json())
  }
}
