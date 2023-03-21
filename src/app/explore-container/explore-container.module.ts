import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import {MessagesModule} from "../messages/messages.module";


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MessagesModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
