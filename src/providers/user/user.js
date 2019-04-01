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
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from "angularfire2/firestore";
import { DEFAULT_AVATAR } from "../constants";
import { CartProvider } from '../cart/cart';
import { OrderProvider } from "../order/order";
import { NotificationProvider } from "../notification/notification";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/take';
/*
 Generated class for the UserProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var UserProvider = /** @class */ (function () {
    function UserProvider(afAuth, afs, cartProvider, orderProvider, notificationProvider) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.cartProvider = cartProvider;
        this.orderProvider = orderProvider;
        this.notificationProvider = notificationProvider;
        this.userCollection = this.afs.collection('admins');
        this.users = this.userCollection.valueChanges();
    }
    // login by email and pw
    UserProvider.prototype.login = function (email, password) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (authData) {
                observer.next();
            }).catch(function (error) {
                observer.error(error);
            });
        });
    };
    UserProvider.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    // register user
    UserProvider.prototype.register = function (email, password) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (authData) {
                _this.add(authData.uid, {
                    email: authData.email,
                    name: authData.email,
                    photoUrl: DEFAULT_AVATAR
                });
                observer.next();
            }).catch(function (error) {
                observer.error(error);
            });
        });
    };
    UserProvider.prototype.add = function (uid, user) {
        console.log('customers/' + uid, user);
        return this.afs.doc('customers/' + uid).set(user);
    };
    UserProvider.prototype.update = function (user) {
        return this.afs.doc('customers/' + this.authUser.uid).update(user);
    };
    UserProvider.prototype.getCurrent = function () {
        console.log('customers/' + this.authUser.uid);
        return this.afs.doc('customers/' + this.authUser.uid).valueChanges();
    };
    // init other service providers with userId
    UserProvider.prototype.initProviders = function (authData) {
        // set current user
        this.authUser = authData;
        this.cartProvider.init(authData.uid);
        this.orderProvider.init(authData.uid);
        this.notificationProvider.init(authData.uid);
    };
    // login with facebook
    UserProvider.prototype.loginWithFacebook = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function (result) {
            console.log(result.user);
            _this.createUserIfNotExist(result.user.uid, {
                email: result.user.email,
                name: result.user.displayName,
                photoUrl: result.user.photoURL
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    // login with google
    UserProvider.prototype.loginWithGoogle = function () {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function (result) {
            _this.createUserIfNotExist(result.user.uid, {
                email: result.user.email,
                name: result.user.displayName,
                photoUrl: result.user.photoURL
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    // create new user if not exist
    UserProvider.prototype.createUserIfNotExist = function (uid, user) {
        var _this = this;
        return this.afs.doc('customers/' + uid).valueChanges().take(1).subscribe(function (snapshot) {
            console.log(snapshot);
            // check if user does not exist
            if (!snapshot) {
                _this.add(uid, user);
            }
        });
    };
    UserProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireAuth, AngularFirestore, CartProvider,
            OrderProvider, NotificationProvider])
    ], UserProvider);
    return UserProvider;
}());
export { UserProvider };
//# sourceMappingURL=user.js.map