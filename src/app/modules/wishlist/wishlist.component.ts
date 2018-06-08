import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/interfaces/book.interface';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  public books: Book[] = [];

  constructor(private bookService: BooksService) { 
    this.books = this.bookService.getWishList();
  }
}
