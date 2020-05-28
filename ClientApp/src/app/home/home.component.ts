import { Component, OnInit } from '@angular/core';
import { IJoke } from '../interfaces/IJoke';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public joke: any;

  constructor(
    private jokeService: JokeService
  ) { }

  async ngOnInit() {
  }

  async getJoke() {
    const jokes = await this.jokeService.getJoke();

    this.joke = jokes;

  }


}
