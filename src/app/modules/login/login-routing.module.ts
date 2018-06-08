import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),
  ],
  declarations: []
})
export class LoginRoutingModule { }
