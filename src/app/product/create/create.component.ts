import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(@Inject(ProductService) private service: ProductService) { }

  ngOnInit() {
  }

  saveData(frm: NgForm) {
    if (frm.valid === true) {
      this.service.create(frm.value)
        .then(() => { alert('Product Save'); }).catch(err => { alert(`Product Create Error:${err}`); });
    }
  }
}
