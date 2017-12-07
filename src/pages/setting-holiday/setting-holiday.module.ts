import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingHoliday } from './setting-holiday';

@NgModule({
  declarations: [
    SettingHoliday,
  ],
  imports: [
    IonicPageModule.forChild(SettingHoliday),
  ],
})
export class SettingHolidayModule {}
