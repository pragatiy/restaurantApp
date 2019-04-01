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
import { CategoryProvider } from "../../providers/category/category";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(nav, navParams, categoryProvider) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.categoryProvider = categoryProvider;
        this.categories = [];
        this.store = this.navParams.get('store');
        categoryProvider.all(this.store.id).subscribe(function (cats) { return _this.categories = cats; });
    }
    // view a category
    CategoriesPage.prototype.viewCategory = function (category) {
        this.nav.push(CategoryPage, {
            store: this.store,
            category: category
        });
    };
    CategoriesPage = __decorate([
        Component({
            selector: 'page-categories',
            templateUrl: 'categories.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, CategoryProvider])
    ], CategoriesPage);
    return CategoriesPage;
}());
export { CategoriesPage };
//# sourceMappingURL=categories.js.map