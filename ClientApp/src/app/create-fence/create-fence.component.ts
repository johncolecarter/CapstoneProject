import { Component, OnInit } from '@angular/core';
import { IFence } from '../interfaces/ifence';
import { FenceService } from '../services/fence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-fence',
  templateUrl: './create-fence.component.html',
  styleUrls: ['./create-fence.component.css']
})
export class CreateFenceComponent implements OnInit {

  public fences: IFence[];

  public alert = false;

  public typeConstants = ['Regular', 'Board on Board', 'Dog Eared', 'Horizontal', 'Horizontal BOB', 'Regular w/ 4in Overlay'];

  public brianChad = ['Chad', 'Brian'];

  // tslint:disable-next-line: max-line-length
  public newFence: IFence = { id: undefined, homeOwner: '', address: '', date: new Date(), builder: '', feetOfFence: undefined, heightOfFence: 7, typeOfFence: 'Regular', gates: undefined, curb: true, stain: true, bOrC: 'Chad', price: undefined };

  constructor(
    private fenceService: FenceService,
    private router: Router) { }

  ngOnInit() {
  }

  async save() {
    await this.fenceService.addFence(this.newFence);
  }

  back() {
    this.router.navigate(['fence']);
  }

  alerting() {
    this.alert = !this.alert;
  }

}
