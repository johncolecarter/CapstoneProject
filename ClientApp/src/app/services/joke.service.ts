import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IJoke } from '../interfaces/IJoke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  public joke: IJoke;

  readonly JOKE_URL = 'https://icanhazdadjoke.com/';

  constructor(private http: HttpClient) { }

  async getJoke() {
    return await this.http.get<IJoke>(this.JOKE_URL).toPromise();
  }
}
