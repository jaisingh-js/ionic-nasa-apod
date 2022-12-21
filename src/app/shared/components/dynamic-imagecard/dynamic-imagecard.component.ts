import { Component, Input, OnInit } from '@angular/core';
import { IApod } from 'src/app/interfaces/iapod';
import { AstropodService } from 'src/app/services/astropod.service';

@Component({
  selector: 'app-dynamic-imagecard',
  templateUrl: './dynamic-imagecard.component.html',
  styleUrls: ['./dynamic-imagecard.component.scss'],
})
export class DynamicImagecardComponent implements OnInit {
  @Input() date: Date = new Date();
  imageData?: IApod;

  constructor(private astroService: AstropodService) { }

  ngOnInit() {
    this.astroService.getImageOn(this.getStringDate(this.date))
      .subscribe(
        (data) => {
          this.imageData = data;
        }
      );
  }

  getStringDate(date: Date) {
    return date.toISOString().slice(0, 10);
  }

}
