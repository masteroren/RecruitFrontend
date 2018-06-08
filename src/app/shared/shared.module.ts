import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BooksComponent } from './components/books/books.component';
import { BookItemComponent } from './components/books/book-item/book-item.component';

import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    RouterModule
  ],
  exports: [
    WelcomeComponent,
    BooksComponent
  ],
  declarations: [
    WelcomeComponent,
    BooksComponent,
    BookItemComponent]
})
export class SharedModule { }
