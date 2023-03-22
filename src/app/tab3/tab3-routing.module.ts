import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Lepiej dac guarda na sciezke do page 1 niz importowac cala strone do trzeciej
import { Tab3Page } from './tab3.page';
import {Tab1Page} from "../tab1/tab1.page";

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'detail/:id',
    component: Tab3Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
