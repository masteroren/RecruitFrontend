import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IsAuthenticatedGuard } from '../../shared/guards/is-authenticated.guard';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { BooksService } from '../../shared/services/books.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    SearchComponent,
    FilterComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [BooksService]
})
export class HomeModule { }
