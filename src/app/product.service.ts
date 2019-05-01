import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { nextContext } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _list = Array<IProduct>();

  constructor() {
    this._list.push(<IProduct>{ ProductId: 1, ProductName: 'Book', ProductPrice: 1000 });
    this._list.push(<IProduct>{ ProductId: 2, ProductName: 'TV', ProductPrice: 2000 });
    this._list.push(<IProduct>{ ProductId: 3, ProductName: 'Mobile', ProductPrice: 3000 });
  }


  getAll() {
    return Promise.resolve(this._list);
  }

  get(id) {
    return Promise.resolve(this._list.find(p => p.ProductId == id));
  }

  create(value) {
    return new Promise((res, rej) => {
      value.ProductId = this._list.reduce((a, b) => a.ProductId > b.ProductId ? a : b).ProductId + 1;
      this._list.push(value);
      res();
    });
  }


  update(id, value) {
    return this.get(id).then(data => {
      data.ProductName = value.ProductName;
      data.ProductPrice = value.ProductPrice;
    });
  }


  delete(id) {
    return new Promise(res => {
      this._list = this._list.filter(p => p.ProductId != id);
      res();
    });
  }
}

interface IProduct {
  ProductId: number;

  ProductName: string;

  ProductPrice: number;

}
