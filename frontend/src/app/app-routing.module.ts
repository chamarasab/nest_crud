// @ts-ignore

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllUsersComponent} from "./users/all-users/all-users.component";
import {AddUsersComponent} from "./users/add-users/add-users.component";

const routes: Routes = [
  {
    path: '',
    component:AllUsersComponent
  },
  {
    path: 'add-user',
    component: AddUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
