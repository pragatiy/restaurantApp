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
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { UserProvider } from "../../providers/user/user";
import { LoadingProvider } from "../../providers/loading/loading";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav, userProvider, alertCtrl, loadingProvider) {
        this.nav = nav;
        this.userProvider = userProvider;
        this.alertCtrl = alertCtrl;
        this.loadingProvider = loadingProvider;
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (!this.email || !this.password) {
            var alert_1 = this.alertCtrl.create({
                message: 'Please provide email and password',
                buttons: ['OK']
            });
            return alert_1.present();
        }
        if (this.password != this.confirmPassword) {
            var alert_2 = this.alertCtrl.create({
                message: 'Confirm password does not match',
                buttons: ['OK']
            });
            return alert_2.present();
        }
        this.loadingProvider.present('Please wait...');
        this.userProvider.register(this.email, this.password).subscribe(function (authData) {
            _this.loadingProvider.dismiss();
            // this.navCtrl.setRoot(HomePage);
        }, function (error) {
            _this.loadingProvider.dismiss();
            var alert = _this.alertCtrl.create({
                message: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(LoginPage);
    };
    RegisterPage = __decorate([
        Component({
            selector: 'page-register',
            templateUrl: 'register.html'
        }),
        __metadata("design:paramtypes", [NavController, UserProvider, AlertController,
            LoadingProvider])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.js.map