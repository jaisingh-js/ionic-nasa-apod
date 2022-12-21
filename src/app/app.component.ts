import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  links = [
    {
      label: 'pic of day',
      url: '/'
    },
    {
      label: 'pic by date',
      url: '/picbydate'
    },
    {
      label: 'pic slides',
      url: '/picslides'
    }
  ];

  constructor(private navCtrl: NavController) { }
  
  goto(url: string) {
    this.navCtrl.navigateForward(url);
  }
}
