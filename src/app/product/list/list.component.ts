import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: any;

  constructor(@Inject(ProductService) private service: ProductService) { }

  ngOnInit() {
    this.service.getAll().then(data => this.list = data);
  }

  delete(id) {
    this.service.delete(id).then(() => this.service.getAll()).then(data => this.list = data);
  }

}
