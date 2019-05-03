import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  CARD_SERVICE = 'http://localhost:3000/Cards/';

  onCardChange = new EventEmitter();

  constructor(@Inject(HttpClient) private proxy: HttpClient) { }

  add(value) {
    const { ProductName = 'other', ProductPrice = 1, Quntity = 1 } = value;
    return this.proxy.post(this.CARD_SERVICE, { ProductName, ProductPrice, Quntity })
      .toPromise().then(() => this.onCardChange.emit());
  }

  get() {
    return this.proxy.get(this.CARD_SERVICE).toPromise();
  }

  delete(id) {
    return this.proxy.delete(this.CARD_SERVICE + id).toPromise().then(() => this.onCardChange.emit());
  }
}
