import { Component, Input, OnInit } from '@angular/core';
import { IApod } from 'src/app/interfaces/iapod';
import { AstropodService } from 'src/app/services/astropod.service';

@Component({
  selector: 'app-pic-slider',
  templateUrl: './pic-slider.component.html',
  styleUrls: ['./pic-slider.component.scss'],
})
export class PicSliderComponent implements OnInit {
  @Input() imageData?: IApod;
  @Input() date: string = '';
  // max = new Date().toISOString().slice(0, 10);
  // min = new Date(2020, 0, 1).toISOString().slice(0, 10);
  loading: boolean = false;

  constructor(private astroService: AstropodService) { }

  ngOnInit() { 
    this.getImageData(this.date);
  }
  
  getImageData(date: string) {
    this.loading = true;
    this.astroService.getImageOn(date).subscribe(
      (data) => {
        this.imageData = data;
        console.log('loaded');
        console.log(this.imageData);
        this.loading = false;
      }
    );  
    
  }

  // newDate(ev: any) {
  //   const date = ev.detail.value;
  //   this.date = date.slice(0, 10);
  //   console.log(this.date);
  //   this.getImageData(this.date);
  // }

}
