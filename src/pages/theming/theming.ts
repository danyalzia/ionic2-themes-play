import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AppState } from '../../app/app.global';

@Component({
  selector: 'page-theming',
  templateUrl: 'theming.html'
})
export class ThemingPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemingPage');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: AppState) {
  }
  
  changeTheme(theme) {
    this.global.set('theme', theme);
  }
}
