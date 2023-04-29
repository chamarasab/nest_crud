import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {Router} from "@angular/router";
import {CreateOrUpdateUser} from "../create-or-update-user";

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private usersService: UsersService, private router: Router) {
  }

  users: CreateOrUpdateUser = {
    name: '',
    contact: '',
    image: ''
  }

  create() {
    this.usersService.create(this.users).subscribe(() => {
      this.router.navigate(['/']);
    })
  }
}
