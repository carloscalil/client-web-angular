import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, enableProdMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private apiUrl='https://localhost:44380/api/medicos'
  
  constructor(private http: HttpClient) { }

  public get(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  public post (endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`,data);
  }
}
