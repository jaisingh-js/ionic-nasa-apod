import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicsliderPage } from './picslider.page';

const routes: Routes = [
  {
    path: '',
    component: PicsliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicsliderPageRoutingModule {}
