import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  private form: FormGroup
  private categories: string[];
  constructor(private fb: FormBuilder, private el: ElementRef, private movieSvc: MovieService) {

    this.categories = ['Bollywood', 'Hollywood', 'Tollywood', 'Mollywood']
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      actors: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      directors: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      writers: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      music: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      singers: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      description: ['', Validators.required],
      genre: ['', Validators.required],
      year: ['', Validators.compose([Validators.required, Validators.min(1950), Validators.max(new Date().getFullYear() + 5)])],
      runtime: [''],
      language: ['', Validators.required],
      awards: [''],
      production: ['', Validators.required],
      category: [''],
      poster: [''],
      trailer: [''],
    })
  }

  public addMovie() {
    if (this.form.valid) {
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
      this.movieSvc.add(formData)
        .subscribe(
        res => alert("Success"),
        err => alert("error")
        )
    }
    else{
      alert('form not valid')
    }
  }

}
