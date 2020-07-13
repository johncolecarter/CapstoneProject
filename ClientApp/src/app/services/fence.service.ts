import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFence } from '../interfaces/ifence';

@Injectable({
  providedIn: 'root'
})
export class FenceService {

  public fences: IFence[];

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) { }

  async getFences() {
    return this.http.get<IFence[]>(this.baseUrl + 'fence').toPromise();
  }

  async addFence(fence: IFence) {
    return await this.http.post<IFence>(this.baseUrl + 'fence', fence).toPromise();
  }

  async getById(id: number) {
    return await this.http.get(this.baseUrl + 'fence/' + id).toPromise();
  }

  async deleteFence(id: number) {
    return await this.http.delete(this.baseUrl + 'fence/' + id).toPromise();
  }
}
