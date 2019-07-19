import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MovieService } from "../../services/movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  private form: FormGroup
  private categories: string[];



  constructor(private fb: FormBuilder, private el: ElementRef, private movieSvc: MovieService, private route: ActivatedRoute) {
    this.categories = ['Bollywood', 'Hollywood', 'Tollywood', 'Mollywood']
  }

  ngOnInit() {
    let movieId = this.route.snapshot.params.id
    let movie=this.route.snapshot.data['movie']

    this.form = this.fb.group({
            id: [movieId],
            title: [movie.title, Validators.required],
            actors: [movie.actors, Validators.compose([Validators.required, Validators.minLength(3)])],
            directors: [movie.directors, Validators.compose([Validators.required, Validators.minLength(3)])],
            writers: [movie.writers, Validators.compose([Validators.required, Validators.minLength(3)])],
            music: [movie.music, Validators.compose([Validators.required, Validators.minLength(3)])],
            singers: [movie.singers, Validators.compose([Validators.required, Validators.minLength(3)])],
            description: [movie.description, Validators.required],
            genre: [movie.genre, Validators.required],
            year: [movie.year, Validators.compose([Validators.required, Validators.min(1950), Validators.max(new Date().getFullYear() + 5)])],
            runtime: [movie.runtime],
            language: [movie.language, Validators.required],
            awards: [movie.awards],
            production: [movie.production, Validators.required],
            category: [movie.category],
            poster:[movie.poster],
            trailer:[movie.trailer]
    })

    // this.movieSvc.getMovieById(movieId)
    //   .subscribe(
    //   movie => {
    //     this.form = this.fb.group({
    //       id: [movieId],
    //       title: [movie.title, Validators.required],
    //       actors: [movie.actors, Validators.compose([Validators.required, Validators.minLength(3)])],
    //       directors: [movie.directors, Validators.compose([Validators.required, Validators.minLength(3)])],
    //       writers: [movie.writers, Validators.compose([Validators.required, Validators.minLength(3)])],
    //       music: [movie.music, Validators.compose([Validators.required, Validators.minLength(3)])],
    //       singers: [movie.singers, Validators.compose([Validators.required, Validators.minLength(3)])],
    //       description: [movie.description, Validators.required],
    //       genre: [movie.genre, Validators.required],
    //       year: [movie.year, Validators.compose([Validators.required, Validators.min(1950), Validators.max(new Date().getFullYear() + 5)])],
    //       runtime: [movie.runtime],
    //       language: [movie.language, Validators.required],
    //       awards: [movie.awards],
    //       production: [movie.production, Validators.required],
    //       category: [movie.category],
    //     })
    //   },
    //   err => {
    //     console.log("Error", err)
    //   });
  }

  public updateMovie() {
    let movieId = this.form.value.id
    console.log(movieId)
    let posterEl: HTMLInputElement = this.el.nativeElement.querySelector('#poster');
    let trailerEl: HTMLInputElement = this.el.nativeElement.querySelector('#trailer');

    let posterCount: number = posterEl.files.length;
    let trailerCount: number = trailerEl.files.length;
    let formData = new FormData();
    
          formData.append('title', this.form.value.title);
          formData.append('actors', this.form.value.actors.split('\n'));
          formData.append('directors', this.form.value.directors.split('\n'));
          formData.append('writers', this.form.value.writers.split('\n'));
          formData.append('music', this.form.value.music.split('\n'));
          formData.append('singers', this.form.value.singers.split('\n'));
          formData.append('description', this.form.value.description);
          formData.append('genre', this.form.value.genre.split('\n'));
          formData.append('year', this.form.value.year);
          formData.append('runtime', this.form.value.runtime);
          formData.append('language', this.form.value.language.split('\n'));
          formData.append('awards', this.form.value.awards.split('\n'));
          formData.append('production', this.form.value.production);
          formData.append('category', this.form.value.category);

          if (posterCount > 0) {
            formData.append('poster', posterEl.files.item(0));
          }
          if (trailerCount > 0) {
            formData.append('trailer', trailerEl.files.item(0));
          }
    this.movieSvc.updateMovies(movieId,formData)
    .subscribe(
      res => alert("Success"),
      err => alert("error")
    )

  }
}
