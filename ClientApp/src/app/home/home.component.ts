import { Component, OnInit } from '@angular/core';
import { IJoke } from '../interfaces/IJoke';
import { JokeService } from '../services/joke.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public jokes: IJoke[];

  displayedColumns: string[] = ['joke'];
  dataSource: MatTableDataSource<IJoke>;

  constructor(private jokeService: JokeService) {
  }

  async ngOnInit() {
    this.jokes = await this.jokeService.getJoke();

    const joke = this.jokes;

    this.dataSource = new MatTableDataSource(joke);
  }

}
