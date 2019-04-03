import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { CategoryPage } from "../category/category";
import { CategoriesPage } from "../categories/categories";
import { StoreProvider } from "../../providers/store/store";
import { CategoryProvider } from "../../providers/category/category";
import {  ModalController, ModalOptions } from "ionic-angular";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // slides for slider
  public slides = [
    "https://getbento.imgix.net/accounts/a744b5c69b16e98fe627d4f445028a1d/media/images/86786logo_black.png",
    "https://firebasestorage.googleapis.com/v0/b/multi-restaurant-5fa27.appspot.com/o/images%2Foie_5142126OQhdZ7wJ.jpg?alt=media&token=852bb7cc-62b3-401b-841e-1c431b998bef",
    "https://firebasestorage.googleapis.com/v0/b/multi-restaurant-5fa27.appspot.com/o/images%2Foie_51423323rgHf2vB.jpg?alt=media&token=141de913-08d2-477b-9042-ce1a7c3a4d94"
    
  ];

  // list of restaurant
  stores: any;
  orderType:any;
  constructor(public nav: NavController, public navParam: NavParams, public modalCtrl: ModalController, public storeProvider: StoreProvider, public categoryProvider: CategoryProvider) {
    storeProvider.all().subscribe(snapshot => {
      this.stores = snapshot;
      this.orderType=  this.navParam.get('orderType'); 
      // convert children categories to array
      this.stores.forEach((value, key) => {
        // TODO limit by 6 cats
        categoryProvider.all(value.id).subscribe(cats => this.stores[key].cats = cats);
      });
    });
  }

  // view a category
  viewCategory(store, category) {
    this.nav.push(CategoryPage, {
      store: store,
      category: category
    });
  }

  // view list categories of store
  viewRestaurant(store) {
    this.nav.push(CategoriesPage, {store: store});
  }

  changeEditBtn(){

  const modalOptions: ModalOptions = {
    cssClass: "signInModal"
  };
  const modal = this.modalCtrl.create("PopupPage", {}, modalOptions);
  modal.present();


  }
}
