import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from './home.component';
import { IsAuthenticatedGuard } from '../../shared/guards/is-authenticated.guard';

const searchRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [IsAuthenticatedGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          applyMoreInfo: true,
          applyHeartIcon: true,
          applyRemove: false
        }
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  declarations: []
})
export class HomeRoutingModule { }
