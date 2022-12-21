import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicbydatePage } from './picbydate.page';

const routes: Routes = [
  {
    path: '',
    component: PicbydatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicbydatePageRoutingModule {}
