import { Component, OnInit } from '@angular/core';
import { FenceService } from '../services/fence.service';
import { IFence } from '../interfaces/ifence';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fence-card',
  templateUrl: './fence-card.component.html',
  styleUrls: ['./fence-card.component.css']
})
export class FenceCardComponent implements OnInit {

  readonly ID = 'id';

  public deleting = false;

  public fence: any;

  // tslint:disable-next-line: max-line-length
  public descripConstants: any = ['Address:', 'Date:', 'Builder:', 'Feet of Fence:', 'Height of Fence:', 'Type of Fence:', 'Number of Gates:', 'Curb:', 'Stain:', 'Brian or Chad:', 'Price:'];

  // tslint:disable-next-line: max-line-length
  public dataConstants: any = ['address', 'date', 'builder', 'feetOfFence', 'heigthOfFence', 'typeOfFence', 'gates', 'curb', 'stain', 'bOrC', 'price'];

  constructor(
    private fenceService: FenceService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  async ngOnInit() {

    const id = this.activatedRouter.snapshot.params[this.ID];

    const fence = await this.fenceService.getById(id);

    this.fence = fence;

    // return fence;
  }

  back() {
    this.router.navigate(['fences']);
  }

  isDeleting() {
    this.deleting = !this.deleting;
  }

  async delete() {
    const id = this.activatedRouter.snapshot.params[this.ID];

    await this.fenceService.deleteFence(id);

    this.router.navigate(['fences']);
  }

}
