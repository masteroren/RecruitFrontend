import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  @Input() public books: Book[];

  constructor() {
  }

}
