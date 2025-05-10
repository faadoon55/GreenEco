import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImpApiService {

  constructor(private http: HttpClient) { }

  get(api: string): Observable<any> {
    return this.http.get<any>(api);
  }

  post(api: string, data: any): Observable<any> {
    return this.http.post<any>(api, data);
  }

  put(api: string, data: any): Observable<any> {
    return this.http.put<any>(api, data);
  }

  delete(api: string): Observable<any> {
    return this.http.delete<any>(api);
  }
}
