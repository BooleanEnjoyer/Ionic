import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchHeroComponent} from "./search-hero.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MessagesModule} from "../messages/messages.module";



@NgModule({
  declarations: [SearchHeroComponent],
  exports: [
    SearchHeroComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MessagesModule
  ]
})
export class SearchHeroModule { }
