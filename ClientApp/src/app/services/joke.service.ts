import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IJoke } from '../interfaces/IJoke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  readonly JOKE_URL = 'https://icanhazdadjoke.com/';

  constructor(private http: HttpClient) { }

  // async getJoke(): Promise<IJoke[]> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   return await this.http.get<IJoke[]>(this.JOKE_URL).toPromise();
  // }
}
