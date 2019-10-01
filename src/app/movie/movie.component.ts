import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// import { Movie } from './movie.model';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[ApiService]
})
export class MovieComponent implements OnInit {

  movies : any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
    this.apiService.getMovie()
        .subscribe((res)=>{
          this.movies = res['movies'];
          console.log(this.movies)
          
        });

  }

}
