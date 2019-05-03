import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(@Inject(HttpClient) private proxy: HttpClient) { }

  PRODUCT_SERVICE = 'http://localhost:3000/Products';

  getAll(): any {
    return this.proxy.get(this.PRODUCT_SERVICE).toPromise();
  }

  get(id): any {
    return this.proxy.get(`this.PRODUCT_SERVICE/${id}`).toPromise();
  }

  create(value) {
    return this.proxy.post(this.PRODUCT_SERVICE, value).toPromise();
  }


  update(id, value) {
    return this.proxy.put(`this.PRODUCT_SERVICE/${id}`, value).toPromise();
  }


  delete(id) {
    return this.proxy.delete(`this.PRODUCT_SERVICE/${id}`).toPromise();
  }
}