import { Injectable } from '@angular/core';
import { Movie } from '../Models/Movie';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { MovieChart } from '../Models/MovieChart';
import { StarRatingModule } from 'angular-star-rating';
@Injectable()
export class MoviesDataService {

    movies: Movie[] = [];
    moviechart: MovieChart[] = [];

    constructor(private _http: Http) { }

    public movieApiUrl = 'http://localhost:3000/api/movies';


    getAllMovies(): Observable<Movie[]> {
        return this._http.get(this.movieApiUrl)
            .map((res) => res.json())
            .do(res => console.log('Get API Log :', res))
            .catch((error) => Observable.throw(error.json().error || 'Server Error'));
    }

    getMovieCountByGenre(): Observable<any[]> {
        return this._http.get(this.movieApiUrl + '/getcountbygenre')
            .map((res) => res.json())
            .do(res => console.log('Get API Log :', res))
            .catch((error) => Observable.throw(error.json().error || 'Server Error'));
    }

    InsertMovie(body: Object) {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        return this._http.post(this.movieApiUrl, bodyString, options)
            .map((res) => { res.json() })
            .do(data => console.log('POST API Log :', data))
            .catch(this.ServerError);
    }

    private ServerError(err: any) {
        console.log('server error :', err);
        if (err instanceof Response) {
            return Observable.throw(err.json() || 'backend server error');
        }

        return Observable.throw(err || 'backend server error');
    }

}