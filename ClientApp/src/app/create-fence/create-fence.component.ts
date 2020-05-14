import { Component, OnInit } from '@angular/core';
import { IFence } from '../interfaces/ifence';
import { FenceService } from '../services/fence.service';

@Component({
  selector: 'app-create-fence',
  templateUrl: './create-fence.component.html',
  styleUrls: ['./create-fence.component.css']
})
export class CreateFenceComponent implements OnInit {

  public fences: IFence[];

  // tslint:disable-next-line: max-line-length
  public newFence: IFence = { id: undefined, homeOwner: '', address: '', date: new Date(), builder: '', feetOfFence: undefined, heightOfFence: undefined, typeOfFence: '', gates: undefined, curb: true, stain: true, bOrC: '', price: undefined };

  constructor(private fenceService: FenceService) { }

  ngOnInit() {
  }

  async save() {
    await this.fenceService.addFence(this.newFence);

    // this.fences = await this.fenceService.getFences();

    // const fence = this.fences;
    // this.dataSource = new MatTableDataSource(fence);

    // this.dataSource.sort = this.sort;

    // this.dataSource.paginator = this.paginator;
  }

}
