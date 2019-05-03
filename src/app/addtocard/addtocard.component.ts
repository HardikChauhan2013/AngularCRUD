import { Component, OnInit, Inject, AfterContentChecked, AfterViewChecked, OnChanges } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-addtocard',
  templateUrl: './addtocard.component.html',
  styleUrls: ['./addtocard.component.css']
})
export class AddtocardComponent implements OnInit, AfterContentChecked {

  cards: any[];
  finalTotal = 0;
  constructor(@Inject(CardService) private service: CardService) { }

  ngOnInit() {
    console.log('init');
    this.service.get().then((data: any[]) => this.cards = data);

    this.service.onCardChange.subscribe(() => {

      this.service.get().then((data: any[]) => this.cards = data);

    });

  }

  ngAfterContentChecked() {
    this.finalTotal = this.cards && this.cards.map((p: any) => p.ProductPrice * p.Quntity).reduce((x, y) => x + y);
  }

  deleteCard(id) {
    this.service.delete(id);
  }

}
