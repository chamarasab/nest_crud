import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {Users} from "./users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get<Users[]>("http://localhost:3000/users");
  }
}
