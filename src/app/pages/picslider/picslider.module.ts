import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicsliderPageRoutingModule } from './picslider-routing.module';

import { PicsliderPage } from './picslider.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicsliderPageRoutingModule,
    SharedModule
  ],
  declarations: [PicsliderPage]
})
export class PicsliderPageModule {}
