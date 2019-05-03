import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { ListComponent } from './product/list/list.component';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';

const routes: Routes = [
  { path: 'about', component: AboutusComponent },
  { path: 'product/list', component: ListComponent },
  { path: 'product/create', component: CreateComponent },
  { path: 'product/edit/:id', component: EditComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
