import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MessagesModule} from "../messages/messages.module";
import {SearchHeroModule} from "../search-hero/search-hero.module";



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MessagesModule,
    SearchHeroModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
