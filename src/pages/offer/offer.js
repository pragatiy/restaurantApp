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
import { ItemPage } from "../item/item";
import { ItemProvider } from "../../providers/item/item";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var OfferPage = /** @class */ (function () {
    function OfferPage(nav, itemProvider) {
        this.nav = nav;
        this.itemProvider = itemProvider;
        // get all items
        this.items = itemProvider.all();
    }
    // view item detail
    OfferPage.prototype.viewItem = function (id) {
        this.nav.push(ItemPage, { id: id });
    };
    // add cart
    OfferPage.prototype.addCart = function () {
        // add your code here
    };
    OfferPage = __decorate([
        Component({
            selector: 'page-offer',
            templateUrl: 'offer.html'
        }),
        __metadata("design:paramtypes", [NavController, ItemProvider])
    ], OfferPage);
    return OfferPage;
}());
export { OfferPage };
//# sourceMappingURL=offer.js.map