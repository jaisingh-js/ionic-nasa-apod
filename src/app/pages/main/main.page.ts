import { Component, OnInit } from '@angular/core';
import { IApod } from 'src/app/interfaces/iapod';
import { AstropodService } from 'src/app/services/astropod.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  todayImage?: IApod;


  constructor(private astroService: AstropodService) { }

  ngOnInit() {
    this.astroService.getApod().subscribe((data) => this.todayImage = data);
  }

  getYesterdayPic() {
    this.astroService.getImageOn('2022-12-18').subscribe((data) => console.log(data));
  }

}
