import { Component,OnInit ,ViewChild, ElementRef, NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,AlertController } from 'ionic-angular';
import {} from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { HomePage } from '../home/home';
/**
 * Generated class for the PopupLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popup-location',
  templateUrl: 'popup-location.html',
   queries: {
    nav: new ViewChild('content')
  }
})
export class PopupLocationPage {
 @ViewChild('search') public searchElement: ElementRef;
 public searchControl: FormControl;
 latitude:any;
 longitude:any;
 nav: any;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,public viewCtrl : ViewController,private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, public navParams: NavParams) {
  
 this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, {
        types: ["address"]
      });
       console.log("autocomplete",autocomplete);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result        
           let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          let arra:any= autocomplete.getPlace();
             console.log("place",place);
             debugger;
           //  var currentUserAddress = place.formatted_address;
              if(arra.length){
               //this.geoCode(currentUserAddress);
                let lat = place[0].geometry.location.lat();
				let lng =  place[0].geometry.location.lng();
				console.log("lat",lat);
				console.log("lng",lng);
		              this.distance(lat, lng, "28.598070", "77.342870", "M")
                }
	          else if(place.geometry)
	           {
           			let lat = place.geometry.location.lat();
					let lng =  place.geometry.location.lng();
 					console.log("lat",lat)
 					console.log("lng",lng);
					this.distance(lat, lng, "28.598070", "77.342870", "M")
                }else{
                	let alert = this.alertCtrl.create({
			              title: "",
			              subTitle: "Please re-enter the location!",
			              buttons: ["OK"]
			            });
			            alert.present();
			           
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
DisplayLOcation(){
	
}


geoCode(address:any) {
	debugger;
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
    	console.log("results",results);
    	console.log("status",status);
    	if(results[0].geometry)
    	{
		    this.latitude = results[0].geometry.location.lat();
		    this.longitude = results[0].geometry.location.lng();
		    //alert("lat: " + this.latitude + ", long: " + this.longitude);
		}
		else{

			// alert("lat: " + address + ", long: " + results + " hello" + status);
		}

		   });
	}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupLocationPage');
  }

 distance(lat1, lon1, lat2, lon2, unit) {
 	
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
				console.log("dist",dist);

		//return dist;
		  if (dist >= 7) {
		  	let alert = this.alertCtrl.create({
			              title: "",
			              subTitle: "Please enter the location within seven miles",
			              buttons: ["OK"]
			            });
			            alert.present();
		  }else{
                       this.navCtrl.setRoot(HomePage);
		  }

	}


}

	dismiss(){
		this.viewCtrl.dismiss();
		}
}
