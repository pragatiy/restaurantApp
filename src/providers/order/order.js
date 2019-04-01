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
/*
 Generated class for the OrderProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var OrderProvider = /** @class */ (function () {
    function OrderProvider(afs) {
        this.afs = afs;
    }
    // find orders by userId, sort by created time
    OrderProvider.prototype.init = function (userId) {
        var _this = this;
        this.userId = userId;
        this.orderCollection = this.afs.collection('orders', function (ref) { return ref.where('userId', '==', _this.userId).orderBy('createdAt', 'desc'); });
    };
    // create new order
    OrderProvider.prototype.add = function (stores, address) {
        for (var i in stores) {
            if (stores[i] && stores[i].items && stores[i].items.length) {
                this.afs.collection('orders').add({
                    userId: this.userId,
                    address: address,
                    items: stores[i].items,
                    store: {
                        id: stores[i].id,
                        name: stores[i].name
                    }
                });
            }
        }
    };
    // mark order as reviewed
    OrderProvider.prototype.review = function (orderId) {
        return this.afs.doc('orders/' + orderId).update({ 'isReviewed': true });
    };
    OrderProvider.prototype.all = function () {
        return this.orderCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    OrderProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore])
    ], OrderProvider);
    return OrderProvider;
}());
export { OrderProvider };
//# sourceMappingURL=order.js.map