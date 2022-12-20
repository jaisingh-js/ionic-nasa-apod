import { Component, Input, OnInit } from '@angular/core';
import { IApod } from 'src/app/interfaces/iapod';

@Component({
  selector: 'app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.scss'],
})
export class ImagecardComponent implements OnInit {
  @Input() imageData?: IApod;

  constructor() { }

  ngOnInit() {}

}
