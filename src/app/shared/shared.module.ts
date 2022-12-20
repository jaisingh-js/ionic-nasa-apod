import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagecardComponent } from './components/imagecard/imagecard.component';



@NgModule({
  declarations: [ImagecardComponent],
  imports: [
    CommonModule
  ],
  exports: [ImagecardComponent]
})
export class SharedModule { }
