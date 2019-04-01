var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { MapsAPILoader } from '@agm/core';
import { HomePage } from '../home/home';
/**
 * Generated class for the PopupLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopupLocationPage = /** @class */ (function () {
    function PopupLocationPage(navCtrl, alertCtrl, viewCtrl, mapsAPILoader, ngZone, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.navParams = navParams;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, {
                types: ["address"]
            });
            console.log("autocomplete", autocomplete);
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    debugger;
                    var place = autocomplete.getPlace();
                    var arra = autocomplete.getPlace();
                    console.log("place", place);
                    var currentUserAddress = place.formatted_address;
                    console.log("currentUserAddress", currentUserAddress);
                    if (currentUserAddress) {
                        //this.geoCode(currentUserAddress);
                        var alert_1 = _this.alertCtrl.create({
                            title: "",
                            subTitle: "Please re-enter the location!",
                            buttons: ["OK"]
                        });
                        alert_1.present();
                    }
                    else {
                        var lat = place.geometry.location.lat();
                        var lng = place.geometry.location.lng();
                        console.log("lat", lat);
                        console.log("lng", lng);
                        _this.distance(lat, lng, "28.598070", "77.342870", "M");
                    }
                    // var geocoder = new google.maps.Geocoder();
                    // geocoder.geocode( { 'address': currentUserAddress}, function(results, status) {
                    //   if (status == google.maps.GeocoderStatus.OK) {
                    //     var latitude = results[0].geometry.location.latitude;
                    //     var longitude = results[0].geometry.location.longitude;
                    //     var latlng = new LatLng(latitude, longitude);
                    //     var userAddress = new LatLng(currentUserAddress)
                    //     console.log(userAddress);
                    //   } 
                    // }); 
                    //         if (arra.length) {
                    //         	let lat = place[0].geometry.location.lat();
                    // let lng =  place[0].geometry.location.lng();
                    // 	console.log("lat",lat);
                    // 	console.log("lng",lng);
                    // this.distance(lat, lng, "28.598070", "77.342870", "M") 
                    //         }else{
                    //                let lat = place.geometry.location.lat();
                    // let lng =  place.geometry.location.lng();
                    // 	console.log("lat",lat);
                    // 	console.log("lng",lng);
                    // this.distance(lat, lng, "28.598070", "77.342870", "M") 
                    //         }
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    }
    PopupLocationPage.prototype.geoCode = function (address) {
        var _this = this;
        debugger;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            console.log("results", results);
            console.log("status", status);
            if (results[0].geometry) {
                _this.latitude = results[0].geometry.location.lat();
                _this.longitude = results[0].geometry.location.lng();
                alert("lat: " + _this.latitude + ", long: " + _this.longitude);
            }
            else {
                alert("lat: " + address + ", long: " + results + " hello" + status);
            }
        });
    };
    PopupLocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopupLocationPage');
    };
    PopupLocationPage.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
        debugger;
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") {
                dist = dist * 1.609344;
            }
            if (unit == "N") {
                dist = dist * 0.8684;
            }
            console.log("dist", dist);
            //return dist;
            if (dist >= 7) {
                var alert_2 = this.alertCtrl.create({
                    title: "",
                    subTitle: "Please enter the location within seven miles",
                    buttons: ["OK"]
                });
                alert_2.present();
            }
            else {
                this.nav.setRoot(HomePage);
            }
        }
    };
    PopupLocationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        ViewChild('search'),
        __metadata("design:type", ElementRef)
    ], PopupLocationPage.prototype, "searchElement", void 0);
    PopupLocationPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-popup-location',
            templateUrl: 'popup-location.html',
            queries: {
                nav: new ViewChild('content')
            }
        }),
        __metadata("design:paramtypes", [NavController, AlertController, ViewController, MapsAPILoader, NgZone, NavParams])
    ], PopupLocationPage);
    return PopupLocationPage;
}());
export { PopupLocationPage };
//# sourceMappingURL=popup-location.js.map