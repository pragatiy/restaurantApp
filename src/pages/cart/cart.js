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
import { NavController } from 'ionic-angular';
import { CheckoutPage } from "../checkout/checkout";
import { Storage } from '@ionic/storage';
import { CartProvider } from "../../providers/cart/cart";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(nav, storage, cartProvider) {
        this.nav = nav;
        this.storage = storage;
        this.cartProvider = cartProvider;
        this.cart = this.cartProvider.get();
    }
    // plus quantity
    CartPage.prototype.addQty = function (item) {
        this.cartProvider.addQty(item.id, 1, item.variations, item.size);
    };
    // minus quantity
    CartPage.prototype.minusQty = function (item) {
        if (item.quantity < 2) {
            return;
        }
        this.cartProvider.removeItem(item, 1);
    };
    // remove item from cart
    CartPage.prototype.remove = function (restId, index) {
        this.cartProvider.removeItem(restId, index);
    };
    // click buy button
    CartPage.prototype.buy = function () {
        this.nav.push(CheckoutPage, { cart: this.cart });
    };
    CartPage = __decorate([
        Component({
            selector: 'page-cart',
            templateUrl: 'cart.html'
        }),
        __metadata("design:paramtypes", [NavController, Storage, CartProvider])
    ], CartPage);
    return CartPage;
}());
export { CartPage };
//# sourceMappingURL=cart.js.map