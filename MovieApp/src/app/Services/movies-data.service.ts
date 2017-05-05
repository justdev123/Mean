import { Injectable } from '@angular/core';
import { Movie } from '../Models/Movie';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { MovieChart } from '../Models/MovieChart';
@Injectable()
export class MoviesDataService{

movies : Movie[] = [];
moviechart: MovieChart[]=[];

constructor(private _http: Http){}

public movieApiUrl = 'http://localhost:3000/api/movies';


getAllMovies(): Observable<Movie[]>{
return this._http.get(this.movieApiUrl)
           .map((res)=> res.json())
            .do(res => console.log('Get API Log :',res))
           .catch((error)=> Observable.throw(error.json().error || 'Server Error'));
}

getMovieCountByGenre(): Observable<any[]>{
return this._http.get(this.movieApiUrl+'/getcountbygenre')
           .map((res)=> res.json())
            .do(res => console.log('Get API Log :',res))
           .catch((error)=> Observable.throw(error.json().error || 'Server Error'));
}
}