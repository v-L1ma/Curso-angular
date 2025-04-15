import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarService {
  private apiUrl = "http://localhost:8080/hello"

  constructor(private http: HttpClient) { }

  getMessage(): Observable<{ message: string}>{

    return this.http.get<{ message: string}>(this.apiUrl)

  }
}
