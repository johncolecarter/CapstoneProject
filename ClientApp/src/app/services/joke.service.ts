import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IJoke } from '../interfaces/IJoke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  readonly JOKE_URL = 'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/';

  constructor(private http: HttpClient) { }

  async getJoke(): Promise<IJoke[]> {
    return await this.http.get<IJoke[]>(this.JOKE_URL).toPromise();
  }
}
