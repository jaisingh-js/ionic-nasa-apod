import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicbydatePageRoutingModule } from './picbydate-routing.module';

import { PicbydatePage } from './picbydate.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PicSliderComponent } from './pic-slider/pic-slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicbydatePageRoutingModule,
    SharedModule
  ],
  declarations: [PicbydatePage, PicSliderComponent],
  exports: [PicSliderComponent]
})
export class PicbydatePageModule {}
