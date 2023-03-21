import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {MessagesComponent} from "./messages.component";



@NgModule({
  declarations: [MessagesComponent],
  exports: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class MessagesModule { }
