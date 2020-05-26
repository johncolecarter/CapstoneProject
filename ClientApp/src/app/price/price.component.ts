import { Component, OnInit } from '@angular/core';
import { IPrice } from '../interfaces/IPrice';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  public price: IPrice = { feetOfFence: 0, heightOfFence: 0, typeOfFence: 'Regular', gates: 0, extra: 0 };

  public typeConstants = ['Regular', 'Board on Board', 'Dog Eared', 'Horizontal', 'Horizontal BOB', 'Regular w/ 4in Overlay'];

  total: number;

  constructor() { }

  ngOnInit() {
  }

  getPrice() {
    switch (this.price.typeOfFence) {
      case this.price.typeOfFence = 'Regular': {
        if (this.price.heightOfFence === 7) {

          this.total = (this.price.feetOfFence * 30) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 6) {

          this.total = (this.price.feetOfFence * 20) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 8) {

          this.total = (this.price.feetOfFence * 40) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 9) {

          this.total = (this.price.feetOfFence * 45) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 10) {

          this.total = (this.price.feetOfFence * 50) + (this.price.gates * 250) + (this.price.extra);

        }
        break;
      }
      case this.price.typeOfFence = 'Board on Board': {
        if (this.price.heightOfFence === 7) {

          this.total = (this.price.feetOfFence * 35) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 6) {

          this.total = (this.price.feetOfFence * 25) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 8) {

          this.total = (this.price.feetOfFence * 45) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 9) {

          this.total = (this.price.feetOfFence * 50) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 10) {

          this.total = (this.price.feetOfFence * 55) + (this.price.gates * 250) + (this.price.extra);

        }
        break;
      }
      case this.price.typeOfFence = 'Dog Eared': {
        if (this.price.heightOfFence === 7) {

          this.total = (this.price.feetOfFence * 25) + (this.price.gates * 100) + (this.price.extra);

        } else if (this.price.heightOfFence === 6) {

          this.total = (this.price.feetOfFence * 20) + (this.price.gates * 100) + (this.price.extra);

        } else if (this.price.heightOfFence === 8) {

          this.total = (this.price.feetOfFence * 30) + (this.price.gates * 100) + (this.price.extra);

        }
        break;
      }
      case this.price.typeOfFence = 'Horizontal': {
        if (this.price.heightOfFence === 7) {

          this.total = (this.price.feetOfFence * 40) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 6) {

          this.total = (this.price.feetOfFence * 30) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 8) {

          this.total = (this.price.feetOfFence * 45) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 9) {

          this.total = (this.price.feetOfFence * 50) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 10) {

          this.total = (this.price.feetOfFence * 55) + (this.price.gates * 250) + (this.price.extra);

        }
        break;
      }
      case this.price.typeOfFence = 'Horizontal BOB': {
        if (this.price.heightOfFence === 7) {

          this.total = (this.price.feetOfFence * 45) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 6) {

          this.total = (this.price.feetOfFence * 35) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 8) {

          this.total = (this.price.feetOfFence * 50) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 9) {

          this.total = (this.price.feetOfFence * 55) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 10) {

          this.total = (this.price.feetOfFence * 60) + (this.price.gates * 250) + (this.price.extra);

        }
        break;
      }
      case this.price.typeOfFence = 'Regular w/ 4in Overlay': {
        if (this.price.heightOfFence === 7) {

          this.total = (this.price.feetOfFence * 35) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 6) {

          this.total = (this.price.feetOfFence * 25) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 8) {

          this.total = (this.price.feetOfFence * 45) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 9) {

          this.total = (this.price.feetOfFence * 50) + (this.price.gates * 250) + (this.price.extra);

        } else if (this.price.heightOfFence === 10) {

          this.total = (this.price.feetOfFence * 55) + (this.price.gates * 250) + (this.price.extra);

        }
        break;
      }
    }
  }

}
