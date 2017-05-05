import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesDataService } from '../../Services/movies-data.service';
import { Movie } from '../../Models/Movie';
import { DataGridModule } from 'primeng/primeng';
import { PanelModule, ButtonModule, ChartModule } from 'primeng/primeng';
import { StarRatingModule } from 'angular-star-rating';
@Component({
  selector: 'app-root',
  templateUrl: './MovieKiosk.html',
  styles: [require('../../../assets/css/MovieKiosk.css'),
  require('../../../assets/css/styles.css')],
  providers: [MoviesDataService],
   encapsulation: ViewEncapsulation.None
})

export class MovieKioskComponent implements OnInit {
  constructor(private _MovieDataService: MoviesDataService) {
    this.data = {
      labels: [],
      datasets: [
        {
          label: 'Movie Genres',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: []
        }
      ]
    }
  }
  movies: Movie[];
  data: any;
  public datapointArray = [];
  labelArray = [];
  ngOnInit() {

    this._MovieDataService.getAllMovies().subscribe((res) => {
      if (res['StatusCode'] == '1') {
        this.movies = res['RecordSet'].recordset;
console.log(this.movies);
      }
    });
    var rowData: any[] = [];
    this._MovieDataService.getMovieCountByGenre().subscribe((res) => {
      if (res['StatusCode'] == '1') {
        var chartdata = res['RecordSet'].recordset;
        for (var i = 0; i < res['RecordSet'].recordset.length; i++) {
          this.datapointArray.push(chartdata[i].MovieCount);
          this.labelArray.push(chartdata[i].GenreName);
        }
        console.log(this.datapointArray);
        this.data = {
          labels: this.labelArray,
          datasets: [
            {
              label: 'Movie Genres',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: this.datapointArray
            },

          ]
        }
      }

    });
  }

}