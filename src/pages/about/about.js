var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(nav) {
        this.nav = nav;
        // working days
        this.days = [
            {
                'name': 'Monday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Tuesday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Wednesday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Thursday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Friday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Saturday',
                'hours': '05:00pm - 10:00pm'
            },
            {
                'name': 'Sunday',
                'hours': '05:00pm - 10:00pm'
            }
        ];
    }
    AboutPage = __decorate([
        Component({
            selector: 'page-about',
            templateUrl: 'about.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map