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
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from "../category/category";
import { CategoriesPage } from "../categories/categories";
import { StoreProvider } from "../../providers/store/store";
import { CategoryProvider } from "../../providers/category/category";
import { ModalController } from "ionic-angular";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(nav, navParam, modalCtrl, storeProvider, categoryProvider) {
        var _this = this;
        this.nav = nav;
        this.navParam = navParam;
        this.modalCtrl = modalCtrl;
        this.storeProvider = storeProvider;
        this.categoryProvider = categoryProvider;
        // slides for slider
        this.slides = [
            "https://getbento.imgix.net/accounts/a744b5c69b16e98fe627d4f445028a1d/media/images/86786logo_black.png",
            "https://firebasestorage.googleapis.com/v0/b/multi-restaurant-5fa27.appspot.com/o/images%2Foie_5142126OQhdZ7wJ.jpg?alt=media&token=852bb7cc-62b3-401b-841e-1c431b998bef",
            "https://firebasestorage.googleapis.com/v0/b/multi-restaurant-5fa27.appspot.com/o/images%2Foie_51423323rgHf2vB.jpg?alt=media&token=141de913-08d2-477b-9042-ce1a7c3a4d94"
        ];
        storeProvider.all().subscribe(function (snapshot) {
            _this.stores = snapshot;
            _this.orderType = _this.navParam.get('orderType');
            // convert children categories to array
            _this.stores.forEach(function (value, key) {
                // TODO limit by 6 cats
                categoryProvider.all(value.id).subscribe(function (cats) { return _this.stores[key].cats = cats; });
            });
        });
    }
    // view a category
    HomePage.prototype.viewCategory = function (store, category) {
        this.nav.push(CategoryPage, {
            store: store,
            category: category
        });
    };
    // view list categories of store
    HomePage.prototype.viewRestaurant = function (store) {
        this.nav.push(CategoriesPage, { store: store });
    };
    HomePage.prototype.changeEditBtn = function () {
        var modalOptions = {
            cssClass: "signInModal"
        };
        var modal = this.modalCtrl.create("PopupPage", {}, modalOptions);
        modal.present();
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, StoreProvider, CategoryProvider])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map