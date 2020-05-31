import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailDataService {

  constructor(private httpClient: HttpClient) { }

  public sendData(body): Observable<any> {
    return this.httpClient.post('https://send-email-4052.herokuapp.com/formulario', body);
  }
}
