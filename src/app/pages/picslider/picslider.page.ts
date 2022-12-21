import { Component, OnInit, ViewChild } from '@angular/core';
import { IApod } from 'src/app/interfaces/iapod';
import { AstropodService } from 'src/app/services/astropod.service';

@Component({
  selector: 'app-picslider',
  templateUrl: './picslider.page.html',
  styleUrls: ['./picslider.page.scss'],
})
export class PicsliderPage implements OnInit {
  slides: IApod[] = [];
  currentDate = new Date();
  date = this.currentDate.toISOString().slice(0, 10);
  @ViewChild('ionSlider') ionSlider: any;
  elementCount = 10;
  sliderOpts = {
    initialSlide: 0
  }
  Dates: string[] = [];

  constructor(private astroService: AstropodService) { }

  ngOnInit() {
    const todayDate = new Date();
    for (let i = 0; i < this.elementCount; i++) {
      let stringDate = this.sliceDate(this.getDiffDate(todayDate, i));
      this.astroService.getImageOn(stringDate).subscribe(
        (data) => {
          this.slides?.splice(i, 0, data);
          // console.log(this.slides);
        }
      );
    }
  }

  decrementDate() {
    const newDate = this.currentDate.getDate() - 1;
    this.currentDate.setDate(newDate);
    this.date = this.currentDate.toISOString().slice(0, 10);
    this.ionSlider.getActiveIndex()
      .then((data:any) => console.log(data));
    
  }

  getYesterday(date: Date): Date {
    let newDate = new Date(date.getTime());
    // console.log(newDate);
    newDate.setDate(date.getDate() - 1);
    return newDate;
  }

  getDiffDate(date: Date, day: number): Date {
    let newDate = new Date(date.getTime());
    // console.log(newDate);
    newDate.setDate(date.getDate() - day);
    return newDate;
  }

  sliceDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }

  incrementDate() {
    // this.sliderOpts.initialSlide = this.sliderOpts.initialSlide + 1;
    // this.ionSlider.update();
  }

  prevSlideStart() {
    this.ionSlider.getActiveIndex()
      .then((index: number) => {
        if ((this.slides.length - index) > 6) {
          const strdate = this.slides[0].date;
          const date = this.getDateFromString(strdate);
          this.astroService.getImageOn(this.sliceDate(this.getYesterday(date)))
            .subscribe(
              (data) => {
                // this.slides.unshift(data);
                // console.log(this.slides);
                // this.slides.splice(0, 9);
            }
          )
        }
    })
  }

  nextSlideStart() {
    this.ionSlider.getActiveIndex()
      .then((index: number) => {
        if ((this.slides.length - index) < 5) {
          const strdate = this.slides[9].date;
          const date = this.getDateFromString(strdate);
          console.log(date);
          console.log(this.sliceDate(this.getYesterday(date)));
          this.astroService.getImageOn(this.sliceDate(this.getYesterday(date)))
            .subscribe(
              (data) => {
                // this.slides.push(data);
                console.log(this.slides);
                // this.slides.splice(0, 1);
            }
          )
        }
    })
  }

  // maintainSlides(activeIndex: number) {
  //   const arrLen = this.slides.length;
  //   if ((arrLen - activeIndex) < 5) {
  //     this.astroService.getImageOn()
  //   }
  // }

  getDateFromString(date: string): Date {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    return new Date(+year, +month - 1, +day, 0, 0, 0);
  }

}
