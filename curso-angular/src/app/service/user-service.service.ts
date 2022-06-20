import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../Users";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }

  getAll(): Observable<Users[]>{
    return this.http.get<Users[]>(this.apiUrl)
  }
}
