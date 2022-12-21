import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicslidesPage } from './picslides.page';

const routes: Routes = [
  {
    path: '',
    component: PicslidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicslidesPageRoutingModule {}
