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
import { AngularFirestore } from 'angularfire2/firestore';
/*
 Generated class for the CartProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var CartProvider = /** @class */ (function () {
    function CartProvider(afs) {
        this.afs = afs;
        this.clearCart();
    }
    // clear cart item
    CartProvider.prototype.clearCart = function () {
        this.cart = {
            stores: [],
            total: 0,
            userId: null
        };
    };
    // add item to cart
    CartProvider.prototype.addItem = function (item, quantity, store, size, variations) {
        var itemFound = false;
        var cartItem;
        variations = (variations && variations.length) ? variations : null;
        // group item by store
        for (var i in this.cart.stores) {
            for (var j in this.cart.stores[i].items) {
                cartItem = this.cart.stores[i].items[j];
                // if item has found, just minus the qty
                if ((cartItem.id == item.id)) {
                    if (this.isSame(cartItem.variations, variations) && (cartItem.size == size)) {
                        cartItem.quantity += quantity;
                        itemFound = true;
                        break;
                    }
                }
            }
        }
        // if item can not be found, add item object to cart
        if (!itemFound) {
            var price_1 = item.price;
            if (size) {
                price_1 += size.price;
            }
            if (variations && variations.length) {
                variations.forEach(function (vr) {
                    price_1 += vr.price;
                });
            }
            var st = {
                id: store.id,
                name: store.name,
                items: [
                    {
                        id: item.id,
                        name: item.name,
                        price: price_1,
                        quantity: quantity,
                        thumbnail: item.thumbnail,
                        variations: variations,
                        size: size,
                        subTotal: 0.0
                    }
                ],
                subTotal: 0
            };
            this.cart.stores.push(st);
        }
        this.calculateCart();
        this.save();
    };
    // increase the quantity for item
    CartProvider.prototype.addQty = function (itemId, quantity, variations, size) {
        var cartItem;
        variations = (variations && variations.length) ? variations : null;
        for (var i in this.cart.stores) {
            for (var j in this.cart.stores[i].items) {
                cartItem = this.cart.stores[i].items[j];
                if (cartItem.id == itemId) {
                    if (this.isSame(cartItem.variations, variations) && (cartItem.size == size)) {
                        cartItem.quantity += quantity;
                        break;
                    }
                }
            }
        }
        this.calculateCart();
        this.save();
    };
    // remove item from cart
    CartProvider.prototype.removeItem = function (item, quantity) {
        var cartItem;
        for (var i in this.cart.stores) {
            for (var j in this.cart.stores[i].items) {
                cartItem = this.cart.stores[i].items[j];
                if (cartItem.id == item.id) {
                    if (this.isSame(cartItem.variations, item.variations) && (cartItem.size == item.size)) {
                        var qty = cartItem.quantity - quantity;
                        if (qty > 0) {
                            cartItem.quantity -= quantity;
                        }
                        else {
                            this.cart.stores[i].items.splice(parseInt(j), 1);
                        }
                        break;
                    }
                }
            }
        }
        this.calculateCart();
        this.save();
    };
    // calculate cart total
    CartProvider.prototype.calculateCart = function () {
        var total = 0;
        var storeTotal;
        this.cart.stores.map(function (store) {
            storeTotal = 0;
            store.items.map(function (item) {
                item.subTotal = item.price * item.quantity;
                total += item.subTotal;
                storeTotal += item.subTotal;
            });
            store.subTotal = storeTotal;
        });
        this.cart.total = total;
    };
    CartProvider.prototype.save = function () {
        this.afs.doc('carts/' + this.userId).set(this.cart);
    };
    // setup init data for cart
    CartProvider.prototype.init = function (userId) {
        var _this = this;
        this.userId = userId;
        this.cart.userId = userId;
        this.afs.doc('carts/' + userId).valueChanges().take(1).subscribe(function (cart) {
            if (cart && cart.stores) {
                _this.cart = cart;
            }
            else {
                _this.clearCart();
            }
        });
    };
    CartProvider.prototype.get = function () {
        return this.cart;
    };
    CartProvider.prototype.isSame = function (x, y) {
        console.log(JSON.stringify(x), JSON.stringify(y));
        return x == y || JSON.stringify(x) == JSON.stringify(y);
    };
    CartProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore])
    ], CartProvider);
    return CartProvider;
}());
export { CartProvider };
//# sourceMappingURL=cart.js.map