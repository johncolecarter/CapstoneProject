import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFence } from '../interfaces/ifence';
import { FenceComponent } from '../fence/fence.component';

@Injectable({
  providedIn: 'root'
})
export class FenceService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) { }

  async getFences() {
    return this.http.get<IFence[]>(this.baseUrl + 'fence').toPromise();
  }

  async addFence(fence: IFence) {
    return await this.http.post<IFence>(this.baseUrl + 'fence', fence).toPromise();
  }
}
