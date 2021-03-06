import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingGoTime page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting-go-time',
  templateUrl: 'setting-go-time.html',
})
export class SettingGoTime {
  title : String;
  event;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.data;
    this.event = { // 로컬 , 서버로부터 저장된 데이터 출력, 저장은 값이 바뀔때마다? 혹은 back버튼으로 페이지 나갈때마다
      "goTime" : "10:00" // 오전 오후는 24시간 제로 먹히는듯
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingGoTime');
  }


}
