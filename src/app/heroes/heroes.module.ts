import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesPage} from "./heroes.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [HeroesPage],
  exports: [
    HeroesPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
