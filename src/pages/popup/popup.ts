import { Component, OnInit, } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,  } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { ModalController, ModalOptions } from "ionic-angular";
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class PopupPage {
timeInterval:any=['6:00am','6:15am','6:30am'];

email:any;
password:any;
myDate:any;
myTime:any;
nav:any;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public viewCtrl : ViewController,public navParams: NavParams,private alertCtrl: AlertController) {
  }


 validateUser():boolean{
   return this.email=="developerslearnit@gmail.com" && this.password=="password";
 }

 signIn(){
   if(this.validateUser()){
     this.navCtrl.setRoot('DashboardPage');
   }else{
     this.showAlert("Wrong email or password");
   }
 }

timeSelect(){
//alert(this.myTime);
}

dateSelect(){
//alert(this.myDate);
}

orderNow() {
  //   if (this.myDate && this.myTime) {
     const modalOptions: ModalOptions = {
        cssClass: "signInModal"
      };
      const modal = this.modalCtrl.create("PopupLocationPage", {}, modalOptions);
      modal.present();    
    /*  }else{
           let alert = this.alertCtrl.create({
              title: "",
              subTitle: "Please enter date and time!",
              buttons: ["OK"]
            });
            alert.present();
  }*/


}

orderLater(){
   //this.navCtrl.setRoot(LoginPage,{'page':'popupPage'});
   // this.navCtrl.setRoot(LoginPage);
     this.navCtrl.setRoot(HomePage);


}

 showAlert(err) {
  let alert = this.alertCtrl.create({
    title: "Error!",
    subTitle: err,
    buttons: ["OK"]
  });
  alert.present();
}
dismiss(){
this.viewCtrl.dismiss();
}
}
