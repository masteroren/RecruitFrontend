import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book, Response } from '../../shared/interfaces/book.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public books: Book[];

  constructor(private booksService: BooksService) { }

  search(term: string) {
    if (term.length <= 2) {
      this.books = [];
      return;
    }
    this.booksService.getBooks(term).subscribe((result: Response) => {
      console.log(result.items);
      this.books = result.items
    });
  }

}
