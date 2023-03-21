import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";



@NgModule({
  declarations: [HeroDetailComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class HeroDetailModule { }
