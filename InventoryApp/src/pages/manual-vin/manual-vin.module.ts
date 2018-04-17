import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManualVinPage } from './manual-vin';

@NgModule({
  declarations: [
    ManualVinPage,
  ],
  imports: [
    IonicPageModule.forChild(ManualVinPage),
  ],
})
export class ManualVinPageModule { }
