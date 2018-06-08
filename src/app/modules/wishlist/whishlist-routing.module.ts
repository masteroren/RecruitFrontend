import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { IsAuthenticatedGuard } from '../../shared/guards/is-authenticated.guard';
import { WishlistComponent } from './wishlist.component';

const wishListRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [IsAuthenticatedGuard],
    children: [
      {
        path: 'wishlist',
        component: WishlistComponent,
        data: {
          applyMoreInfo: false,
          applyHeartIcon: false,
          applyRemove: true
        }
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(wishListRoutes)
  ],
  declarations: []
})
export class WhishlistRoutingModule { }
