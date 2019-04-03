var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ModalController } from "ionic-angular";
import { HomePage } from '../home/home';
var PopupPage = /** @class */ (function () {
    function PopupPage(navCtrl, modalCtrl, viewCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.timeInterval = ['6:00am', '6:15am', '6:30am'];
    }
    PopupPage.prototype.validateUser = function () {
        return this.email == "developerslearnit@gmail.com" && this.password == "password";
    };
    PopupPage.prototype.signIn = function () {
        if (this.validateUser()) {
            this.navCtrl.setRoot('DashboardPage');
        }
        else {
            this.showAlert("Wrong email or password");
        }
    };
    PopupPage.prototype.timeSelect = function () {
        //alert(this.myTime);
    };
    PopupPage.prototype.dateSelect = function () {
        //alert(this.myDate);
    };
    PopupPage.prototype.orderNow = function () {
        //   if (this.myDate && this.myTime) {
        var modalOptions = {
            cssClass: "signInModal"
        };
        var modal = this.modalCtrl.create("PopupLocationPage", {}, modalOptions);
        modal.present();
        /*  }else{
               let alert = this.alertCtrl.create({
                  title: "",
                  subTitle: "Please enter date and time!",
                  buttons: ["OK"]
                });
                alert.present();
      }*/
    };
    PopupPage.prototype.orderLater = function () {
        //this.navCtrl.setRoot(LoginPage,{'page':'popupPage'});
        // this.navCtrl.setRoot(LoginPage);
        this.navCtrl.setRoot(HomePage);
    };
    PopupPage.prototype.showAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: "Error!",
            subTitle: err,
            buttons: ["OK"]
        });
        alert.present();
    };
    PopupPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PopupPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-popup',
            templateUrl: 'popup.html',
            queries: {
                nav: new ViewChild('content')
            }
        }),
        __metadata("design:paramtypes", [NavController, ModalController, ViewController, NavParams, AlertController])
    ], PopupPage);
    return PopupPage;
}());
export { PopupPage };
//# sourceMappingURL=popup.js.map