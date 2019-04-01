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
import { LoadingController, NavController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { UserProvider } from "../../providers/user/user";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(nav, toastCtrl, loadingCtrl, userProvider) {
        var _this = this;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
        userProvider.getCurrent().subscribe(function (user) {
            _this.user = user;
        });
    }
    // save user info
    UserPage.prototype.submit = function () {
        this.userProvider.update(this.user);
        var toast = this.toastCtrl.create({
            message: 'User updated',
            duration: 2000,
            position: 'middle'
        });
        toast.present();
    };
    // choose file for upload
    UserPage.prototype.chooseFile = function () {
        document.getElementById('avatar').click();
    };
    // upload thumb for item
    UserPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = firebase.storage().ref();
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('avatar').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/users/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.user.photoUrl = snapshot.downloadURL;
            });
        }
    };
    UserPage = __decorate([
        Component({
            selector: 'page-user',
            templateUrl: 'user.html'
        }),
        __metadata("design:paramtypes", [NavController, ToastController, LoadingController,
            UserProvider])
    ], UserPage);
    return UserPage;
}());
export { UserPage };
//# sourceMappingURL=user.js.map