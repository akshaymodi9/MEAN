import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../../components/home/home.component";
import { NotFoundComponent } from "../../components/not-found/not-found.component";
import { AddMovieComponent } from "../../components/add-movie/add-movie.component";
import { EditMovieComponent } from "../../components/edit-movie/edit-movie.component";
import { MovieResolverService } from "../../services/movie-resolver.service";


const routes:Routes=[
{
  path:'',
  component:HomeComponent
},
{
  path:'add',
  component:AddMovieComponent
},
{
  path:'edit/:id',
  component:EditMovieComponent,
  resolve:{
    movie:MovieResolverService
  }
},
{
  path:'**',
  component:NotFoundComponent
}



]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class MovieRouteModule { }
