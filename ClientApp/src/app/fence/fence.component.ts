import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { IFence } from '../interfaces/ifence';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FenceService } from '../services/fence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fence',
  templateUrl: './fence.component.html',
  styleUrls: ['./fence.component.css']
})
export class FenceComponent implements OnInit {

  public fences: IFence[];
  public fence: IFence;
  // tslint:disable-next-line: max-line-length

  displayedColumns: string[] = ['homeOwner', 'address', 'feetOfFence', 'typeOfFence', 'date', 'bOrC', 'price', 'viewMore'];
  dataSource: MatTableDataSource<IFence>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private fenceService: FenceService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.fences = await this.fenceService.getFences();

    const fence = this.fences;

    this.dataSource = new MatTableDataSource(fence);

    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;
  }

}
