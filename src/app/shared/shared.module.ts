import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagecardComponent } from './components/imagecard/imagecard.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [ImagecardComponent, HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ImagecardComponent, HeaderComponent]
})
export class SharedModule { }
