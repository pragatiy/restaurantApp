var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import { UserProvider } from "../user/user";
/*
 Generated class for the ItemProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var ItemProvider = /** @class */ (function () {
    function ItemProvider(afs, userProvider) {
        this.afs = afs;
        this.userProvider = userProvider;
        this.itemCollection = this.afs.collection('items', function (ref) { return ref.limit(12); });
    }
    // get all items
    ItemProvider.prototype.all = function () {
        return this.itemCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    // get item by category id
    ItemProvider.prototype.findByCategoryId = function (categoryId, orderBy, orderDirection) {
        return this.afs.collection('items', function (ref) { return ref.where('categoryId', '==', categoryId).orderBy(orderBy, orderDirection); })
            .snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                console.log(data);
                return __assign({ id: id }, data);
            });
        });
    };
    // add review to item
    ItemProvider.prototype.addReview = function (item, userId) {
        var _this = this;
        return this.userProvider.getCurrent().take(1).subscribe(function (user) {
            user.id = userId;
            return _this.afs.collection('items/' + item.id + '/reviews').add({
                user: user,
                rating: item.review.rating,
                comment: item.review.comment
            });
        });
    };
    // get all reviews of items
    ItemProvider.prototype.getReviews = function (itemId) {
        return this.afs.collection('items/' + itemId + '/reviews').valueChanges();
    };
    ItemProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore, UserProvider])
    ], ItemProvider);
    return ItemProvider;
}());
export { ItemProvider };
//# sourceMappingURL=item.js.map