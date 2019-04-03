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
import { HomePage } from "../home/home";
import { OrderProvider } from "../../providers/order/order";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(nav, alertController, navParasm, orderProvider) {
        this.nav = nav;
        this.alertController = alertController;
        this.navParasm = navParasm;
        this.orderProvider = orderProvider;
        this.isEditing = false;
        this.cart = navParasm.get('cart');
    }
    // edit address
    CheckoutPage.prototype.editAddress = function () {
        var prompt = this.alertController.create({
            title: 'Address',
            message: "",
            inputs: [
                {
                    name: 'address',
                    value: ''
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    // place order button click
    CheckoutPage.prototype.buy = function () {
        var _this = this;
        // need to validate the address
        if (!this.address || (this.address.length < 10)) {
            // show alert
            var alert_1 = this.alertController.create({
                title: 'Info',
                subTitle: 'Please enter valid address',
                buttons: ['OK']
            });
            alert_1.present();
            return false;
        }
        this.orderProvider.add(this.cart.stores, this.address);
        // show alert
        var alert = this.alertController.create({
            title: 'Info',
            subTitle: 'You can pick up by the change schedule / edit store',
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        // clear cart
                        // this.cartService.clearCart();
                        // back to home page
                        _this.nav.setRoot(HomePage);
                    }
                }
            ]
        });
        alert.present();
    };
    // enable editing info
    CheckoutPage.prototype.enableEditing = function () {
        this.isEditing = true;
    };
    CheckoutPage = __decorate([
        Component({
            selector: 'page-checkout',
            templateUrl: 'checkout.html'
        }),
        __metadata("design:paramtypes", [NavController, AlertController, NavParams,
            OrderProvider])
    ], CheckoutPage);
    return CheckoutPage;
}());
export { CheckoutPage };
//# sourceMappingURL=checkout.js.map