var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController } from "ionic-angular";
import { HomePage } from '../home/home';
/**
 * Generated class for the PickupDeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PickupDeliveryPage = /** @class */ (function () {
    function PickupDeliveryPage(navCtrl, modalCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.hideMe = false;
    }
    PickupDeliveryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PickupDeliveryPage');
    };
    PickupDeliveryPage.prototype.pickupClick = function () {
        console.log("pick");
        //this.showPopupModal();
        var date = new Date().toISOString();
        this.navCtrl.setRoot(HomePage, { 'orderType': 'PickUp' });
    };
    PickupDeliveryPage.prototype.deliveryClick = function () {
        console.log("deliveryClick");
        //this.showPopupModal();
        var modalOptions = {
            cssClass: "signInModal"
        };
        var modal = this.modalCtrl.create("PopupLocationPage", {}, modalOptions);
        modal.present();
    };
    /*showPopupModal() {
      const modalOptions: ModalOptions = {
        cssClass: "signInModal"
      };
      const modal = this.modalCtrl.create("PopupPage", {}, modalOptions);
      modal.present();
    }
    */
    PickupDeliveryPage.prototype.presentPrompt = function () {
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('order For Now');
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        console.log('Login clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    PickupDeliveryPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-pickup-delivery',
            templateUrl: 'pickup-delivery.html',
        }),
        __metadata("design:paramtypes", [NavController, ModalController, AlertController, NavParams])
    ], PickupDeliveryPage);
    return PickupDeliveryPage;
}());
export { PickupDeliveryPage };
//# sourceMappingURL=pickup-delivery.js.map