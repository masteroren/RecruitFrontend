import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishlistRoutingModule } from './whishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    WhishlistRoutingModule,
    SharedModule
  ],
  exports: [
    WishlistComponent
  ],
  declarations: [
    WishlistComponent
  ]
})
export class WhishlistModule { }
