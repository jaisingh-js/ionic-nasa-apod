import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-picslides',
  templateUrl: './picslides.page.html',
  styleUrls: ['./picslides.page.scss'],
})
export class PicslidesPage implements OnInit {
  dates: Date[] = [];
  elementCount = 10;
  @ViewChild('ionSlider') ionSlider: any;
  count: number = 0;
  activeIndex = 0;
  ionOpts = {
    initialSlide: this.activeIndex
  };

  constructor() { }

  ngOnInit() {
    const todayDate = new Date();
    for (let i = 0; i < this.elementCount; i++) {
      const date = this.getDiffDate(todayDate, i);
      this.dates.push(date);
    }
  }

  prevSlideStart() {
    if (this.count < 5) {
      return;
    }
  }

  nextSlideStart() {
    if (this.count < 5) {
      this.count++;
      return;
    }
    const date = this.dates[this.dates.length - 1];
    this.dates.push(this.getDiffDate(date, 1));
    // console.log(this.dates);
    // this.dates.splice(0, 1);
  }

  getDiffDate(date: Date, day: number): Date {
    let newDate = new Date(date.getTime());
    newDate.setDate(date.getDate() - day);
    return newDate;
  }

  getActiveIndex() {
    this.ionSlider.getActiveIndex()
      .then((data: any) => this.activeIndex = data);
  }


}
