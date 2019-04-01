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
import { CHATS } from "./mock-chats";
/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatProvider = /** @class */ (function () {
    function ChatProvider() {
        this.chats = CHATS;
    }
    ChatProvider.prototype.all = function () {
        return this.chats;
    };
    ChatProvider.prototype.get = function (id) {
        for (var i = 0; i < CHATS.length; i++) {
            if (this.chats[i].id === parseInt(id)) {
                return this.chats[i];
            }
        }
        return null;
    };
    ChatProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ChatProvider);
    return ChatProvider;
}());
export { ChatProvider };
//# sourceMappingURL=chat.js.map