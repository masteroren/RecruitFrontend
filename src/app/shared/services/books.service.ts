import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Book, Response } from '../interfaces/book.interface';
import { Subject } from 'rxjs/Subject';
import { isNullOrUndefined } from 'util';

@Injectable()
export class BooksService {

  private wishList: Book[] = [];
  public changeOnWishList = new Subject();

  constructor(private http: HttpClient) { 
  }

  public getBooks(searchTerm: string): Observable<Response> {
    return this.http.get<Response>(`${environment.volumesApi}`, {
      params: {
        q: searchTerm
      }
    })
  }

  public getWishList() {
    return this.wishList;
  }

  public getWishListCount() {
    return this.wishList.length;
  }

  public addToWishList(book: Book) {
    this.wishList = [...this.wishList, book];
    this.changeOnWishList.next(this.wishList);
  }

  public removeFromWishList(book: Book) {
    let index = this.wishList.findIndex(item => item.id === book.id)
    this.wishList.splice(index, 1);
    this.changeOnWishList.next(this.wishList);
  }

  public isInWishList(book: Book) {
    return isNullOrUndefined(this.wishList.find(item => item.id === book.id)) ? false : true;
  }
}
