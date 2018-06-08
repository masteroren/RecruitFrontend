import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { isNullOrUndefined } from 'util';
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  public wishListCounter: number = 0;

  constructor(public authService: AuthService, private bookService: BooksService) {
    this.wishListCounter = bookService.getWishListCount();
    bookService.changeOnWishList.subscribe((wishList: Book[]) => {
      this.wishListCounter = wishList.length;
    })
  }

}
