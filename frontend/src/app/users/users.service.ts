import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Users} from "./users";
import {CreateOrUpdateUser} from "./create-or-update-user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get<Users[]>("http://localhost:3000/users");
  }

  create(user: CreateOrUpdateUser) {
    return this.http.post("http://localhost:3000/users",user);
  }
}
