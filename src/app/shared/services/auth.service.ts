import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private _authenticated
  public name: string;

  constructor() {
    this._authenticated = false;
  }

  get authenticated(): boolean {
    return this._authenticated;
  }

  set authenticated(val: boolean) {
    this._authenticated = val;
  }

}
