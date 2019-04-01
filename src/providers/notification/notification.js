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
 Generated class for the NotificationProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var NotificationProvider = /** @class */ (function () {
    function NotificationProvider(afs) {
        this.afs = afs;
        console.log('Hello NotificationProvider Provider');
    }
    // find notifications by userId
    NotificationProvider.prototype.init = function (userId) {
        this.userId = userId;
        console.log('notifications/' + this.userId + '/orders');
        this.notiCollection = this.afs.collection('notifications/' + this.userId + '/orders');
    };
    NotificationProvider.prototype.all = function () {
        return this.notiCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    NotificationProvider.prototype.remove = function (id) {
        this.afs.doc('notifications/' + this.userId + '/orders/' + id).delete();
    };
    NotificationProvider.prototype.removeAll = function (notifications) {
        var _this = this;
        notifications.forEach(function (notification) {
            _this.remove(notification.id);
        });
    };
    NotificationProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore])
    ], NotificationProvider);
    return NotificationProvider;
}());
export { NotificationProvider };
//# sourceMappingURL=notification.js.map