import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable(
  {
  providedIn: 'root'
}
)

export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(city: string){
    return this._http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${city}&APPID=47a723461ad5531b796bef48752d29c5`)
    // .map(data => data.json())
    // // .pipe(Map(res => res.json()));
    // .toPromise();
  }

}