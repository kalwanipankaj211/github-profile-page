import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  
  httpOptions;

  constructor(private http: HttpClient) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.httpOptions = {
      headers: httpHeaders
    };
  }

   getGithubUserData() {
    return this.http.get(environment.apiURL , this.httpOptions)
      .pipe(map(response => {
        return response;
      }));
  }
}
