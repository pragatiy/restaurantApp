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
import { CartPage } from "../cart/cart";
import { CartProvider } from "../../providers/cart/cart";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ItemPage = /** @class */ (function () {
    function ItemPage(nav, alertController, navParams, cartProvider) {
        this.nav = nav;
        this.alertController = alertController;
        this.navParams = navParams;
        this.cartProvider = cartProvider;
        this.item = navParams.get('item');
        this.store = navParams.get('store');
    }
    // toggle favorite
    ItemPage.prototype.toggleFav = function (item) {
        item.faved = !item.faved;
    };
    // add item to cart
    ItemPage.prototype.addCart = function () {
        var _this = this;
        var prompt = this.alertController.create({
            title: 'Quantity',
            message: "",
            inputs: [
                {
                    name: 'quantity',
                    value: '1'
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
                        var variations = [];
                        var size = _this.size == undefined ? null : _this.item.sizes[_this.size];
                        _this.item.variations.forEach(function (vr) {
                            if (vr.checked) {
                                variations.push(vr);
                            }
                        });
                        // add item to cart
                        _this.cartProvider.addItem(_this.item, parseInt(data.quantity), _this.store, size, variations);
                        // then alert to user
                        var alert = _this.alertController.create({
                            title: 'Info',
                            message: 'Item added to cart',
                            buttons: [
                                {
                                    text: 'Cart',
                                    handler: function (data) {
                                        _this.nav.push(CartPage);
                                    }
                                },
                                {
                                    text: 'Close'
                                }
                            ]
                        });
                        alert.present();
                    }
                }
            ]
        });
        prompt.present();
    };
    ItemPage = __decorate([
        Component({
            selector: 'page-item',
            templateUrl: 'item.html'
        }),
        __metadata("design:paramtypes", [NavController, AlertController, NavParams,
            CartProvider])
    ], ItemPage);
    return ItemPage;
}());
export { ItemPage };
//# sourceMappingURL=item.js.map