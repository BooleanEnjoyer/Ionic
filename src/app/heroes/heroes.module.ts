import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesPage} from "./heroes.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";



@NgModule({
  declarations: [HeroesPage],
  imports: [
    CommonModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule
  ]
})
export class HeroesModule { }
