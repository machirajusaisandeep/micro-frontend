import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-micro-app';
  movieList:any=[];
  ngOnInit(){
    const movies:any= localStorage.getItem('movieList');
     this.movieList=JSON.parse(movies);
  }
  onAddToWatchList(movie:any){
    const tempWatch:any=localStorage.getItem('watchList');
    const watchList=JSON.parse(tempWatch)
    localStorage.setItem('watchList',JSON.stringify([
      ...watchList,
      movie
    ]))
    console.log(movie,"movie",watchList)
  }
}
