import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../interfaces/book.interface';
import { BooksService } from '../../../services/books.service';
import { isNullOrUndefined } from 'util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() public book: Book;
  public inWishList: boolean = false;
  public viewConfig: any;
  public display: boolean;

  constructor(private bookService: BooksService, private activatedRoute: ActivatedRoute) {
    const data = activatedRoute.data.subscribe(config => {
      this.viewConfig = config;
    })
  }

  ngOnInit(): void {
    this.inWishList = this.bookService.isInWishList(this.book);
  }

  addToWishList() {
    this.inWishList = !this.inWishList;
    if (this.inWishList) {
      this.bookService.addToWishList(this.book);
      this.display = false
    } else {
      this.removeFromWishlist();
    }
  }

  removeFromWishlist() {
    this.bookService.removeFromWishList(this.book);
  }

}
