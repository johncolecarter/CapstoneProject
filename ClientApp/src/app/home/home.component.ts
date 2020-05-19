import { Component, OnInit } from '@angular/core';
import { IJoke } from '../interfaces/IJoke';
import { JokeService } from '../services/joke.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public jokes: IJoke[];

  constructor(private jokeService: JokeService) {
  }

  async ngOnInit() {
  }

  async getJoke() {
    this.jokes = await this.jokeService.getJoke();
  }

}
