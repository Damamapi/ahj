import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = 'https://mailthis.to/kildraxmon@hotmail.com';

  constructor(private http: HttpClient) { }

  postData(userData) {
    return this.http.post(this.api, userData, { responseType: 'text' }).pipe(

      (response) => {
        if (response) {
          return response;
        }
      },
      (error: any) => {
        return error;
      }

    );
  }
}
