import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const JSON_FILE = '../assets/json/images.json';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(JSON_FILE);
  }
}
