import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesPage} from "./heroes.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [HeroesPage],
  imports: [
    CommonModule,
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class HeroesModule { }
