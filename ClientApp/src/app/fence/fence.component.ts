import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fence',
  templateUrl: './fence.component.html',
  styleUrls: ['./fence.component.css']
})
export class FenceComponent implements OnInit {

  public fences: Fence[];
  public newFence: Fence = { homeOwner: '', address: '', feetOfFence: undefined, price: undefined };

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  async ngOnInit() {
    return await this.http.get<Fence[]>(this.baseUrl + 'fence').toPromise();
  }

  async save() {
    await this.http.post<Fence[]>(this.baseUrl + 'fence', this.newFence).toPromise();
    this.newFence = { homeOwner: '', address: '', feetOfFence: 0, price: 0 };
    this.fences = await this.http.get<Fence[]>(this.baseUrl + 'fence').toPromise();
  }

}

interface Fence {
  homeOwner: string;
  address: string;
  feetOfFence: number;
  price: number;
}
