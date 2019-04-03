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
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { UserProvider } from "../../providers/user/user";
import { LoadingProvider } from "../../providers/loading/loading";
import { HomePage } from '../home/home';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(nav, navParams, userProvider, alertCtrl, loadingProvider) {
        this.nav = nav;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.alertCtrl = alertCtrl;
        this.loadingProvider = loadingProvider;
        this.pageName = navParams.get('page');
    }
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(RegisterPage);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.email || !this.password) {
            var alert_1 = this.alertCtrl.create({
                message: 'Please provide email and password',
                buttons: ['OK']
            });
            return alert_1.present();
        }
        this.loadingProvider.present('Please wait...');
        this.userProvider.login(this.email, this.password).subscribe(function (authData) {
            _this.loadingProvider.dismiss();
            if (_this.pageName == 'popupPage') {
                _this.nav.setRoot(HomePage);
            }
            // this.nav.setRoot(HomePage);
        }, function (error) {
            _this.loadingProvider.dismiss();
            var alert = _this.alertCtrl.create({
                message: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    // login with facebook
    LoginPage.prototype.loginWithFacebook = function () {
        this.userProvider.loginWithFacebook();
    };
    // login with google
    LoginPage.prototype.loginWithGoogle = function () {
        this.userProvider.loginWithGoogle();
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, UserProvider, AlertController,
            LoadingProvider])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map