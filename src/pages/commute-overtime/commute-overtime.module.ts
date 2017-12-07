import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommuteOvertime } from './commute-overtime';

@NgModule({
  declarations: [
    CommuteOvertime,
  ],
  imports: [
    IonicPageModule.forChild(CommuteOvertime),
  ],
})
export class CommuteOvertimeModule {}
