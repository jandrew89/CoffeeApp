"use strict";
var observable_1 = require('data/observable');
var coffee_service_1 = require('../../services/coffee-service');
var AddCoffeeViewModel = (function (_super) {
    __extends(AddCoffeeViewModel, _super);
    function AddCoffeeViewModel() {
        _super.call(this);
        this._coffeeService = new coffee_service_1.CoffeeService();
    }
    AddCoffeeViewModel.prototype.addCoffee = function (cost, name, notes, region, acidity, elevation, processing, varietal, body) {
        this._coffeeService.postCoffee(this.selectedIndex, cost, name, notes, region, acidity, elevation, processing, varietal, body);
    };
    Object.defineProperty(AddCoffeeViewModel.prototype, "coffeeType", {
        get: function () {
            return this._coffeeType;
        },
        set: function (v) {
            this._coffeeType = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddCoffeeViewModel.prototype, "coffeeSelection", {
        get: function () {
            return ["Light Roast", "Medium Roast", "Dark Roast"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddCoffeeViewModel.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (v) {
            v += 1;
            this._selectedIndex = v;
        },
        enumerable: true,
        configurable: true
    });
    AddCoffeeViewModel.prototype.deleteCoffee = function (_id) {
        this._coffeeService.deleteCoffee(_id);
        this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: "coffeeSelection" });
    };
    Object.defineProperty(AddCoffeeViewModel.prototype, "coffeePic", {
        // public get darkClicked() : boolean {
        //     return this._darkClicked;
        // }
        // public set darkClicked(v : boolean) {
        //     this._darkClicked = v;
        //     this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: "darkClicked", v: this._darkClicked})
        // }
        // public get mediumClicked() : boolean {
        //     return this._mediumClicked;
        // }
        // public set mediumClicked(v : boolean) {
        //     this._mediumClicked = v;
        //     this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: "mediumClicked", v: this._mediumClicked})
        // }
        // public get lightClicked() : boolean {
        //     return this._lightClicked;
        // }
        // public set lightClicked(v : boolean) {
        //     this._lightClicked = v;
        //     this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: "lightClicked", v: this._lightClicked})
        // }
        get: function () {
            return this._coffeePic;
        },
        set: function (v) {
            this._coffeePic = v;
            this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: "coffeePic", value: this._coffeePic });
        },
        enumerable: true,
        configurable: true
    });
    AddCoffeeViewModel.prototype.takePhoto = function (picture) {
        this._coffeePic = picture;
    };
    return AddCoffeeViewModel;
}(observable_1.Observable));
exports.AddCoffeeViewModel = AddCoffeeViewModel;
//# sourceMappingURL=addCoffee-view-model.js.map