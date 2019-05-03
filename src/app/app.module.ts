import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { LoginComponent } from './page/login/login.component';
import { HeaderComponent } from './part/header/header.component';
import { MenuComponent } from './part/menu/menu.component';
import { ListComponent } from './product/list/list.component';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';
import { AddtocardComponent } from './addtocard/addtocard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    AddtocardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
