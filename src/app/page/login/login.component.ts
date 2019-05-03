import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/login.service';
import { inject } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isInvalidUser = false;

  constructor(@Inject(LoginService) private loginService: LoginService, @Inject(Router) private r: Router) { }

  ngOnInit() {
  }

  validateLogin(frm: NgForm) {

    this.loginService.LogIn(frm.value).then((isValidUser) => {
      if (isValidUser) {
        this.r.navigate(['/']);
      } else {
        this.isInvalidUser = true;
      }
    });
  }
}
