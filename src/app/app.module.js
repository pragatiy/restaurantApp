var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from "angularfire2/firestore";
// import providers
import { CategoryProvider } from '../providers/category/category';
import { ItemProvider } from '../providers/item/item';
import { OrderProvider } from '../providers/order/order';
import { StoreProvider } from '../providers/store/store';
import { CartProvider } from '../providers/cart/cart';
import { UserProvider } from '../providers/user/user';
import { LoadingProvider } from '../providers/loading/loading';
import { NotificationProvider } from "../providers/notification/notification";
import { PostProvider } from '../providers/post/post';
import { ChatProvider } from '../providers/chat/chat';
// import pages
import { AboutPage } from '../pages/about/about';
import { AddressPage } from '../pages/address/address';
import { CartPage } from '../pages/cart/cart';
import { CategoriesPage } from '../pages/categories/categories';
import { CategoryPage } from '../pages/category/category';
import { ChatDetailPage } from '../pages/chat-detail/chat-detail';
import { ChatsPage } from '../pages/chats/chats';
import { CheckoutPage } from '../pages/checkout/checkout';
import { FavoritePage } from '../pages/favorite/favorite';
import { HomePage } from '../pages/home/home';
import { ItemPage } from '../pages/item/item';
import { LoginPage } from '../pages/login/login';
import { NewsPage } from '../pages/news/news';
import { OfferPage } from '../pages/offer/offer';
import { RegisterPage } from '../pages/register/register';
import { SettingPage } from '../pages/setting/setting';
import { UserPage } from '../pages/user/user';
import { OrdersPage } from '../pages/orders/orders';
import { PickupDeliveryPage } from '../pages/pickup-delivery/pickup-delivery';
// end import pages
// AF2 Settings
export var firebaseConfig = {
    apiKey: "AIzaSyARH-B-7AusMYW9bm3wsVshp1j10pGhEyw",
    authDomain: "multi-restaurant-5fa27.firebaseapp.com",
    databaseURL: "https://multi-restaurant-5fa27.firebaseio.com",
    projectId: "multi-restaurant-5fa27",
    storageBucket: "multi-restaurant-5fa27.appspot.com",
    messagingSenderId: "742689787739"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                AboutPage,
                AddressPage,
                CartPage,
                CategoriesPage,
                CategoryPage,
                ChatDetailPage,
                ChatsPage,
                CheckoutPage,
                FavoritePage,
                HomePage,
                ItemPage,
                LoginPage,
                NewsPage,
                OfferPage,
                RegisterPage,
                SettingPage,
                UserPage,
                OrdersPage,
                PickupDeliveryPage
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp),
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFirestoreModule,
                AngularFireAuthModule,
                IonicStorageModule.forRoot(),
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyARH-B-7AusMYW9bm3wsVshp1j10pGhEyw',
                    libraries: ["places", "geometry"]
                })
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                AboutPage,
                AddressPage,
                CartPage,
                CategoriesPage,
                CategoryPage,
                ChatDetailPage,
                ChatsPage,
                CheckoutPage,
                FavoritePage,
                HomePage,
                ItemPage,
                LoginPage,
                NewsPage,
                OfferPage,
                RegisterPage,
                SettingPage,
                UserPage,
                OrdersPage,
                PickupDeliveryPage,
            ],
            providers: [
                StatusBar,
                SplashScreen,
                CategoryProvider,
                ItemProvider,
                OrderProvider,
                StoreProvider,
                CartProvider,
                UserProvider,
                LoadingProvider,
                CartProvider,
                NotificationProvider,
                PostProvider,
                ChatProvider
                /* import services */
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map