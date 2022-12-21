import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagecardComponent } from './components/imagecard/imagecard.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { DynamicImagecardComponent } from './components/dynamic-imagecard/dynamic-imagecard.component';



@NgModule({
  declarations: [ImagecardComponent, HeaderComponent, DynamicImagecardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ImagecardComponent, HeaderComponent, DynamicImagecardComponent]
})
export class SharedModule { }
