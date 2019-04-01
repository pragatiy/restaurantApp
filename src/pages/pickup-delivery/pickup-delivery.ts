import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {  ModalController, ModalOptions } from "ionic-angular";
/**
 * Generated class for the PickupDeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pickup-delivery',
  templateUrl: 'pickup-delivery.html',
})
export class PickupDeliveryPage {
hideMe:boolean=false;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,private alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickupDeliveryPage');
  }

  pickupClick(){
    console.log("pick");
    this.showPopupModal();
  }

  deliveryClick(){
     console.log("deliveryClick");
     this.showPopupModal();
  }

showPopupModal() {
  const modalOptions: ModalOptions = {
    cssClass: "signInModal"
  };
  const modal = this.modalCtrl.create("PopupPage", {}, modalOptions);
  modal.present();
}



  presentPrompt() {
  let alert = this.alertCtrl.create({
  //  title: 'Order for now',
    
    cssClass: 'alertCustomCss',
    inputs: [
      {
        name: 'username',
        placeholder: 'Username'
      },
      {
        name: 'password',
        placeholder: 'Password',
        type: 'password'
      }
    ],
    buttons: [
     {
        text: 'Order For Now',
        role: 'Order',
        handler: data => {
          console.log('order For Now');
        }
      },
      
      {
        text: 'Login',
        handler: data => {
           console.log('Login clicked');
        }
      }
    ]
  });
  alert.present();
}

}
