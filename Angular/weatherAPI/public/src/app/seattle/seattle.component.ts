
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { log } from 'util';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  clouds;

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    console.log("awake");
    
    this._httpService.getWeather('5809844')
    .subscribe(data => {
      
      console.log(data);
    })
    
    // .then( weather => {
    //   console.log(weather)
    //   this.humidity = weather.main.humidity;
    //   this.temp = weather.main.temp;
    //   this.temp = Math.floor(this.temp * (9/5) - 459.67);
    //   this.maxTemp = weather.main.temp_max;
    //   this.maxTemp = Math.floor(this.maxTemp * (9/5) - 459.67);
    //   this.minTemp = weather.main.temp_min;
    //   this.minTemp = Math.floor(this.minTemp * (9/5) - 459.67);
    //   this.clouds = weather.weather[0].description;
    //   console.log(this.weather);
    // });
    
  }
}
