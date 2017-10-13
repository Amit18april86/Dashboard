import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./containers/login-page/login-page.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AuthRoutingModule { }
