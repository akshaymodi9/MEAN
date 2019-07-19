import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpModule} from '@angular/http';
import { MovieRouteModule } from "./modules/movie-route/movie-route.module";
import { MovieService } from "./services/movie.service";

import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { MovieResolverService } from "./services/movie-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AddMovieComponent,
    EditMovieComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MovieRouteModule,
    ReactiveFormsModule

  ],
  providers: [
    MovieService,
    MovieResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
