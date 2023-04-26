import {Component, OnInit} from '@angular/core';
import {Users} from "../users";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  constructor(private usersService: UsersService) {
  }

  users: Users[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.usersService.get().subscribe((data) => {
      this.users = data;
    })
  }
}
