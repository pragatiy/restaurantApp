import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickupDeliveryPage } from './pickup-delivery';

@NgModule({
  declarations: [
    PickupDeliveryPage,
  ],
  imports: [
    IonicPageModule.forChild(PickupDeliveryPage),
  ],
})
export class PickupDeliveryPageModule {}
