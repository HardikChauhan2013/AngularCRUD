import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: any[];

  isAsc = true;

  constructor(@Inject(ProductService) private service: ProductService, @Inject(CardService) private cardService: CardService) { }

  ngOnInit() {
    this.service.getAll().then(data => this.list = data);
  }

  delete(id) {
    this.service.delete(id).then(() => this.service.getAll()).then(data => this.list = data);
  }

  sortByName() {
    if (this.isAsc == true) {
      this.list = this.list.sort((a, b) => a.ProductName > b.ProductName ? 1 : -1);
    } else {
      this.list = this.list.sort((a, b) => a.ProductName < b.ProductName ? 1 : -1);
    }
    this.isAsc = !this.isAsc;
  }

  sortByPrice() {
    if (this.isAsc == true) {
      this.list = this.list.sort((a, b) => a.ProductPrice - b.ProductPrice);
    } else {
      this.list = this.list.sort((a, b) => b.ProductPrice - a.ProductPrice);
    }
    this.isAsc = !this.isAsc;
  }

  addToCard(product) {
    this.cardService.add(product);
  }

}
