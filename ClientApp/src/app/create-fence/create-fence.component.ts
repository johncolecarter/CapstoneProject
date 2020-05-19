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

  // tslint:disable-next-line: max-line-length
  public newFence: IFence = { id: undefined, homeOwner: '', address: '', date: new Date(), builder: '', feetOfFence: undefined, heightOfFence: undefined, typeOfFence: '', gates: undefined, curb: true, stain: true, bOrC: '', price: undefined };

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
