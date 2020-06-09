import { Component, OnInit } from '@angular/core';
import { IPrice } from '../interfaces/IPrice';
import { IMaterial } from '../interfaces/IMaterial';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  public price: IPrice = { feetOfFence: 0, heightOfFence: 0, typeOfFence: 'Regular', gates: 0, curb: 'yes', extra: 0 };

  public yesNo = ['Yes', 'No'];

  public typeConstants = ['Regular', 'Board on Board', 'Dog Eared', 'Horizontal', 'Horizontal BOB', 'Regular w/ 4in Overlay'];

  total: number;

  public materialNeeded: IMaterial = { poles: 0, pickets: 0, rails: 0, cap: 0, trim: 0 };

  constructor() { }

  ngOnInit() {
  }

  getPrice() {
    if (this.price.typeOfFence === 'Regular') {
      if (this.price.heightOfFence === 7) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 40) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 30) + (this.price.gates * 285) + (this.price.extra);
        }
      } else if (this.price.heightOfFence === 6) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 37) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 27) + (this.price.gates * 285) + (this.price.extra);
        }
      } else if (this.price.heightOfFence === 8) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 48) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 38) + (this.price.gates * 285) + (this.price.extra);
        }
      }
    } else if (this.price.typeOfFence === 'Dog Eared') {
      if (this.price.heightOfFence === 7) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 37) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 27) + (this.price.gates * 285) + (this.price.extra);
        }
      } else if (this.price.heightOfFence === 6) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 34) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 24) + (this.price.gates * 285) + (this.price.extra);
        }
      }
    } else if (this.price.typeOfFence === 'Board on Board') {
      if (this.price.heightOfFence === 7) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 49) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 39) + (this.price.gates * 285) + (this.price.extra);
        }
      } else if (this.price.heightOfFence === 6) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 44) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 34) + (this.price.gates * 285) + (this.price.extra);
        }
      } else if (this.price.heightOfFence === 8) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 58) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 48) + (this.price.gates * 285) + (this.price.extra);
        }
      }
    } else if (this.price.typeOfFence === 'Horizontal') {
      if (this.price.heightOfFence === 7) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 48) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 38) + (this.price.gates * 285) + (this.price.extra);
        }
      } else if (this.price.heightOfFence === 6) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 45) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 35) + (this.price.gates * 285) + (this.price.extra);
        }
      } else if (this.price.heightOfFence === 8) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 58) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 48) + (this.price.gates * 285) + (this.price.extra);
        }
      }
    } else if (this.price.typeOfFence === 'Horizontal BOB') {
      if (this.price.heightOfFence === 7) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 58) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 48) + (this.price.gates * 285) + (this.price.extra);
        }
      } else if (this.price.heightOfFence === 6) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 55) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 45) + (this.price.gates * 285) + (this.price.extra);
        }
      } else if (this.price.heightOfFence === 8) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 68) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 58) + (this.price.gates * 285) + (this.price.extra);
        }
      }
    } else if (this.price.typeOfFence === 'Regular w/ 4in Overlay') {
      if (this.price.heightOfFence === 7) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 51) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 41) + (this.price.gates * 285) + (this.price.extra);
        }
      } else if (this.price.heightOfFence === 6) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 46) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 36) + (this.price.gates * 285) + (this.price.extra);
        }
      } else if (this.price.heightOfFence === 8) {
        if (this.price.curb === 'Yes') {
          this.total = (this.price.feetOfFence * 60) + (this.price.gates * 285) + (this.price.extra);
        } else if (this.price.curb === 'No') {
          this.total = (this.price.feetOfFence * 50) + (this.price.gates * 285) + (this.price.extra);
        }
      }
    }
  }

  getMats() {
    this.materialNeeded.poles = Math.round(this.price.feetOfFence / 8) + this.price.gates;
    this.materialNeeded.pickets = Math.round(this.price.feetOfFence / 150);
    this.materialNeeded.rails = Math.round(this.price.feetOfFence / 300);
    this.materialNeeded.cap = Math.round((this.price.feetOfFence / 16) + 1);
    this.materialNeeded.trim = Math.round((this.price.feetOfFence / 21) + 1);
  }
}
