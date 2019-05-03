import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { HeaderComponent } from './part/header/header.component';
import { MenuComponent } from './part/menu/menu.component';
import { ListComponent } from './product/list/list.component';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    HeaderComponent,
    MenuComponent,
    ListComponent,
    CreateComponent,
    EditComponent
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
