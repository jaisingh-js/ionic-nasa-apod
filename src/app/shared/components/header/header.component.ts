import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppconfigService } from 'src/app/services/appconfig.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;
  

  constructor() { }

  ngOnInit() { }

  

}
