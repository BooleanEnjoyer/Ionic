import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {MessagesModule} from "../messages/messages.module";




@NgModule({
  declarations: [HeroDetailComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule
  ],
  exports: [HeroDetailComponent]
})
export class HeroDetailModule { }
