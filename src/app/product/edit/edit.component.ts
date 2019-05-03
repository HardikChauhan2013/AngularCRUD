import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  frm = new FormGroup({
    id: new FormControl(''),
    ProductName: new FormControl(''),
    ProductPrice: new FormControl(''),
  });


  constructor(@Inject(ProductService) private service: ProductService, @Inject(ActivatedRoute) private ar: ActivatedRoute) { }

  ngOnInit() {
    this.service.get(this.ar.snapshot.params.id).then(data => this.frm.patchValue(data));
  }

  saveData() {
    if (this.frm.valid) {
      this.service.update(this.frm.value.id, this.frm.value).then(() => {
        alert('Product Updated');
      }).catch(err => {
        alert(`Product Update Error ${err}`);
      });
    }
  }

}
