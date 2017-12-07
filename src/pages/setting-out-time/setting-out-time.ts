import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingOutTime page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-setting-out-time',
  templateUrl: 'setting-out-time.html',
})
export class SettingOutTime {
  title : String;
  event;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.data;
    this.event = {
      "outTime" : "00:33" // 오전 오후는 24시간 제로 먹히는듯
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingOutTime');
  }

}
