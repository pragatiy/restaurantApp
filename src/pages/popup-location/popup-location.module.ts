import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupLocationPage } from './popup-location';

@NgModule({
  declarations: [
    PopupLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupLocationPage),
  ],
})
export class PopupLocationPageModule {}
