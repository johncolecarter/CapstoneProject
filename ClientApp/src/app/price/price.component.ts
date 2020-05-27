import { Component, OnInit } from '@angular/core';
import { IPrice } from '../interfaces/IPrice';
import { IMaterial } from '../interfaces/IMaterial';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  public price: IPrice = { feetOfFence: 0, heightOfFence: 0, typeOfFence: 'Regular', gates: 0, extra: 0 };

  public typeConstants = ['Regular', 'Board on Board', 'Dog Eared', 'Horizontal', 'Horizontal BOB', 'Regular w/ 4in Overlay'];

  total: number;

  public materialNeeded: IMaterial = { poles: 0, pickets: 0, rails: 0, cap: 0, trim: 0 };

  constructor() { }

  ngOnInit() {
  }

  getPrice() {
    switch (this.price.typeOfFence) {
      case this.price.typeOfFence = 'Regular': {
        if (this.price.heightOfFence === 7) {

          this.total = (this.price.feetOfFence * 30) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 6) {

          this.total = (this.price.feetOfFence * 27) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 8) {

          this.total = (this.price.feetOfFence * 38) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 9) {

          this.total = (this.price.feetOfFence * 45) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 10) {

          this.total = (this.price.feetOfFence * 50) + (this.price.gates * 285) + (this.price.extra);

        }
        break;
      }
      case this.price.typeOfFence = 'Board on Board': {
        if (this.price.heightOfFence === 7) {

          this.total = (this.price.feetOfFence * 39) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 6) {

          this.total = (this.price.feetOfFence * 34) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 8) {

          this.total = (this.price.feetOfFence * 48) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 9) {

          this.total = (this.price.feetOfFence * 50) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 10) {

          this.total = (this.price.feetOfFence * 55) + (this.price.gates * 285) + (this.price.extra);

        }
        break;
      }
      case this.price.typeOfFence = 'Dog Eared': {
        if (this.price.heightOfFence === 7) {

          this.total = (this.price.feetOfFence * 27) + (this.price.gates * 185) + (this.price.extra);

        } else if (this.price.heightOfFence === 6) {

          this.total = (this.price.feetOfFence * 24) + (this.price.gates * 185) + (this.price.extra);

        } else if (this.price.heightOfFence === 8) {

          this.total = (this.price.feetOfFence * 30) + (this.price.gates * 100) + (this.price.extra);

        }
        break;
      }
      case this.price.typeOfFence = 'Horizontal': {
        if (this.price.heightOfFence === 7) {

          this.total = (this.price.feetOfFence * 38) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 6) {

          this.total = (this.price.feetOfFence * 35) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 8) {

          this.total = (this.price.feetOfFence * 48) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 9) {

          this.total = (this.price.feetOfFence * 50) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 10) {

          this.total = (this.price.feetOfFence * 55) + (this.price.gates * 285) + (this.price.extra);

        }
        break;
      }
      case this.price.typeOfFence = 'Horizontal BOB': {
        if (this.price.heightOfFence === 7) {

          this.total = (this.price.feetOfFence * 48) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 6) {

          this.total = (this.price.feetOfFence * 45) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 8) {

          this.total = (this.price.feetOfFence * 58) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 9) {

          this.total = (this.price.feetOfFence * 55) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 10) {

          this.total = (this.price.feetOfFence * 60) + (this.price.gates * 285) + (this.price.extra);

        }
        break;
      }
      case this.price.typeOfFence = 'Regular w/ 4in Overlay': {
        if (this.price.heightOfFence === 7) {

          this.total = (this.price.feetOfFence * 41) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 6) {

          this.total = (this.price.feetOfFence * 36) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 8) {

          this.total = (this.price.feetOfFence * 50) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 9) {

          this.total = (this.price.feetOfFence * 50) + (this.price.gates * 285) + (this.price.extra);

        } else if (this.price.heightOfFence === 10) {

          this.total = (this.price.feetOfFence * 55) + (this.price.gates * 285) + (this.price.extra);

        }
        break;
      }
    }

    if (this.price.feetOfFence < 150) {

      this.materialNeeded.poles = 25;
      this.materialNeeded.pickets = 1;
      this.materialNeeded.rails = .5;
      this.materialNeeded.cap = 11;
      this.materialNeeded.trim = 8;

    } else if (this.price.feetOfFence < 250) {

      this.materialNeeded.poles = 40;
      this.materialNeeded.pickets = 1.5;
      this.materialNeeded.rails = .5;
      this.materialNeeded.cap = 17;
      this.materialNeeded.trim = 13;

    } else if (this.price.feetOfFence < 350) {

      this.materialNeeded.poles = 50;
      this.materialNeeded.pickets = 2;
      this.materialNeeded.rails = 1;
      this.materialNeeded.cap = 23;
      this.materialNeeded.trim = 18;

    } else if (this.price.feetOfFence < 450) {

      this.materialNeeded.poles = 65;
      this.materialNeeded.pickets = 2.5;
      this.materialNeeded.rails = 1;
      this.materialNeeded.cap = 30;
      this.materialNeeded.trim = 23;
    }
  }
}
