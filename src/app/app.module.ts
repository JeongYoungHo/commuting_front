import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CommuteMain } from '../pages/commute-main/commute-main';
import { CommuteAvg } from '../pages/commute-avg/commute-avg';
import { CommuteMinMax } from '../pages/commute-min-max/commute-min-max';
import { CommuteOvertime } from '../pages/commute-overtime/commute-overtime';
import { Setting } from '../pages/setting/setting';
import { SettingGoTime } from '../pages/setting-go-time/setting-go-time'
import { SettingOutTime } from '../pages/setting-out-time/setting-out-time';
import { SettingHourlyWage } from '../pages/setting-hourly-wage/setting-hourly-wage';
import { SettingIncome } from '../pages/setting-income/setting-income';
import { SettingHoliday } from '../pages/setting-holiday/setting-holiday';
import { CommuteTabs } from '../pages/commute-tabs/commute-tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CommuteMain, CommuteAvg, CommuteMinMax, CommuteOvertime, Setting, SettingGoTime, SettingOutTime,
    SettingIncome, SettingHourlyWage, SettingHoliday, CommuteTabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CommuteMain, CommuteAvg, CommuteMinMax, CommuteOvertime, Setting, SettingGoTime, SettingOutTime,
    SettingIncome, SettingHourlyWage, SettingHoliday, CommuteTabs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
