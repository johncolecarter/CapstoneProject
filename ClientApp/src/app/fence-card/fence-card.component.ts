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

  fence: IFence;

  constructor(
    private fenceService: FenceService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.activatedRouter.snapshot.params[this.ID];

    const fence = await this.fenceService.getById(id);

    return fence;
  }

  back() {
    this.router.navigate(['fence']);
  }

}
