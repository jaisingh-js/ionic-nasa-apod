import { Component, OnInit } from '@angular/core';
import { IApod } from 'src/app/interfaces/iapod';
import { AstropodService } from 'src/app/services/astropod.service';

@Component({
  selector: 'app-picbydate',
  templateUrl: './picbydate.page.html',
  styleUrls: ['./picbydate.page.scss'],
})
export class PicbydatePage implements OnInit {
  imageData?: IApod;
  date = new Date().toISOString().slice(0, 10);
  // prevDate = new Date(2022, 11, 19).toISOString().slice(0, 10);
  max = new Date().toISOString().slice(0, 10);
  min = new Date(2020, 0, 1).toISOString().slice(0, 10);
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
        this.loading = false;
      }
    );  
    
  }

  newDate(ev: any) {
    const date = ev.detail.value;
    this.getImageData(date);
  }

  nextSlide() {
    console.log('next slide');
  }

  prevSlide() {
    console.log('prev slide');
  }

}
