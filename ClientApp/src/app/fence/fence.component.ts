import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFence } from '../interfaces/ifence';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fence',
  templateUrl: './fence.component.html',
  styleUrls: ['./fence.component.css']
})
export class FenceComponent implements OnInit {

  isCreating = false;

  fenceForm: FormGroup;

  public fences: IFence[];
  // tslint:disable-next-line: max-line-length
  public newFence: IFence = { homeOwner: '', address: '', date: new Date(), builder: '', feetOfFence: undefined, heightOfFence: undefined, typeOfFence: '', gates: undefined, curb: true, stain: true, bOrC: '', price: undefined };

  displayedColumns: string[] = ['id', 'homeOwner', 'address', 'feetOfFence', 'price'];
  dataSource: MatTableDataSource<IFence>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,
    private formBuilder: FormBuilder
  ) {
    this.fenceForm = this.formBuilder.group({
      inputHomeOwner: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      inputAddress: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])],
      inputDate: ['', Validators.compose([
        Validators.required
      ])],
      inputBuilder: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      inputFeetOfFence: ['', Validators.compose([
        Validators.required
      ])],
      inputHeightOfFence: ['', Validators.compose([
        Validators.required
      ])],
      inputTypeOfFence: ['', Validators.compose([
        Validators.required
      ])],
      inputGates: ['', Validators.compose([
        Validators.required
      ])],
      inputCurb: ['', Validators.compose([
        Validators.required
      ])],
      inputStain: ['', Validators.compose([
        Validators.required
      ])],
      inputBOrC: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      inputPrice: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  async ngOnInit() {
    this.fences = await this.http.get<IFence[]>(this.baseUrl + 'fence').toPromise();
    const fence = this.fences;
    this.dataSource = new MatTableDataSource(fence);

    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;
  }

  async save() {
    await this.http.post<IFence[]>(this.baseUrl + 'fence', this.newFence).toPromise();
    // tslint:disable-next-line: max-line-length
    // this.newFence = { homeOwner: '', address: '', date: new Date(), builder: '', feetOfFence: 0, heightOfFence: 0, typeOfFence: '', gates: 0, curb: true, stain: true, bOrC: '', price: 0 };

    this.fences = await this.http.get<IFence[]>(this.baseUrl + 'fence').toPromise();

    const fence = this.fences;
    this.dataSource = new MatTableDataSource(fence);

    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;
  }

  createNew() {
    this.isCreating = !this.isCreating;
  }

}
