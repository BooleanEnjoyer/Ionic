import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {HeroesModule} from "../heroes/heroes.module";
import {MessagesModule} from "../messages/messages.module";
import {HeroDetailModule} from "../hero-detail/hero-detail.module";


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    HeroesModule,
    MessagesModule,
    HeroDetailModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
