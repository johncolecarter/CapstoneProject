import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFence } from '../interfaces/ifence';
import { FenceComponent } from '../fence/fence.component';
import { Observable } from 'rxjs';

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

  removeFence(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + 'fence/' + id);
  }
}
