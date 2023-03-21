import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import {HeroesPage} from "../heroes/heroes.component";

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, HeroesPage],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
