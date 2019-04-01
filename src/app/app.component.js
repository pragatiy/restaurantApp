var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, NgZone } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from "angularfire2/auth/auth";
// import provider
import { UserProvider } from "../providers/user/user";
import { NotificationProvider } from "../providers/notification/notification";
// import pages
import { HomePage } from '../pages/home/home';
// import {CategoriesPage} from '../pages/categories/categories';
// import {FavoritePage} from '../pages/favorite/favorite';
import { CartPage } from '../pages/cart/cart';
// import {OfferPage} from '../pages/offer/offer';
import { UserPage } from '../pages/user/user';
import { SettingPage } from '../pages/setting/setting';
import { NewsPage } from '../pages/news/news';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { ChatsPage } from '../pages/chats/chats';
import { OrdersPage } from '../pages/orders/orders';
import { PickupDeliveryPage } from '../pages/pickup-delivery/pickup-delivery';
// end import pages
import { MapsAPILoader } from '@agm/core';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, afAuth, mapsAPILoader, ngZone, userProvider, notificationProvider) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.userProvider = userProvider;
        this.notificationProvider = notificationProvider;
        this.pages = [
            {
                title: 'Home',
                icon: 'ios-home-outline',
                count: 0,
                component: HomePage
            },
            /*
             {
             title: 'Categories',
             icon: 'apps',
             count: 0,
             component: CategoriesPage
             },
        
             {
             title: 'Favorite',
             icon: 'star-outline',
             count: 0,
             component: FavoritePage
             },
             */
            {
                title: 'My Cart',
                icon: 'ios-cart-outline',
                count: 0,
                component: CartPage
            },
            {
                title: 'Orders',
                icon: 'ios-time-outline',
                count: 0,
                component: OrdersPage
            },
            /*
             {
             title: 'Offer',
             icon: 'ios-pricetag-outline',
             count: 0,
             component: OfferPage
             },
             */
            {
                title: 'Setting',
                icon: 'ios-settings-outline',
                count: 0,
                component: SettingPage
            },
            {
                title: 'News',
                icon: 'ios-paper-outline',
                count: 0,
                component: NewsPage
            },
            {
                title: 'About us',
                icon: 'ios-information-circle-outline',
                count: 0,
                component: AboutPage
            },
            {
                title: 'Supports',
                icon: 'ios-help-circle-outline',
                count: 0,
                component: ChatsPage
            },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.mapsAPILoader.load().then(function () {
                var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, {
                    types: ["address"]
                });
                console.log("autocomplete", autocomplete);
                autocomplete.addListener("place_changed", function () {
                    _this.ngZone.run(function () {
                        //get the place result
                        var place = autocomplete.getPlace();
                        console.log("place", place);
                        //verify result
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }
                    });
                });
            });
            // check for auth status
            afAuth.authState.subscribe(function (authData) {
                // if user logged in
                if (authData) {
                    // set provider init data
                    _this.userProvider.initProviders(authData);
                    _this.userProvider.getCurrent().take(1).subscribe(function (user) {
                        if (user) {
                            // set current user
                            _this.user = user;
                            // this.nav.setRoot(HomePage);
                            //  alert("hello");
                            _this.nav.setRoot(PickupDeliveryPage);
                            _this.subNoti();
                        }
                        else {
                            _this.logout();
                        }
                    });
                }
                else { // no auth
                    _this.user = null;
                    _this.nav.setRoot(LoginPage);
                    _this.unSubNoti();
                }
            });
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.viewAccount = function () {
        this.nav.setRoot(UserPage);
    };
    // logout
    MyApp.prototype.logout = function () {
        var _this = this;
        this.userProvider.logout().then(function () {
            _this.unSubNoti();
        });
    };
    // subscribe for notifications
    MyApp.prototype.subNoti = function () {
        var _this = this;
        var isShowing = false;
        var notiCount = 0;
        var alert;
        // subscribe to notifications
        this.notiSubcriber = this.notificationProvider.all().subscribe(function (records) {
            console.log('notifications', records);
            // Only listen for new notifcation
            if (records.length > notiCount && !isShowing) {
                isShowing = true;
                // show the notifications
                alert = _this.alertCtrl.create({
                    title: 'Order updated',
                    subTitle: 'Your ' + records.length + ' order(s) has been updated.',
                    buttons: [
                        {
                            text: 'View',
                            handler: function (data) {
                                _this.nav.setRoot(OrdersPage);
                                // remove this notifications
                                _this.notificationProvider.removeAll(records);
                                isShowing = false;
                            }
                        },
                        {
                            text: 'Close',
                            handler: function (data) {
                                _this.notificationProvider.removeAll(records);
                                isShowing = false;
                            }
                        }
                    ]
                });
                alert.present();
            }
            notiCount = records.length;
        });
    };
    MyApp.prototype.unSubNoti = function () {
        if (this.notiSubcriber) {
            this.notiSubcriber.unsubscribe();
        }
    };
    __decorate([
        ViewChild('search'),
        __metadata("design:type", ElementRef)
    ], MyApp.prototype, "searchElement", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html',
            queries: {
                nav: new ViewChild('content')
            }
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen, AlertController,
            AngularFireAuth, MapsAPILoader, NgZone, UserProvider,
            NotificationProvider])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map