import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicslidesPageRoutingModule } from './picslides-routing.module';

import { PicslidesPage } from './picslides.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicslidesPageRoutingModule,
    SharedModule
  ],
  declarations: [PicslidesPage]
})
export class PicslidesPageModule {}
