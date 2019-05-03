import { Component, OnInit, Inject } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentUser = null;

  cardItemCount = 0;

  constructor(@Inject(LoginService) private service: LoginService, @Inject(CardService) private cardService: CardService) { }

  ngOnInit() {
    this.service.loginStateChanged.subscribe(data => {
      this.currentUser = data;
    });

    this.cardService.onCardChange.subscribe(() => {
      this.cardService.get().then((data: []) => this.cardItemCount = data.length);
    });
  }

  signOut() {
    this.service.LogOut();
  }

}
