"use strict";
var observable_1 = require('data/observable');
var coffee_service_1 = require('../../services/coffee-service');
var cameraModule = require("camera");
var AddCoffeeViewModel = (function (_super) {
    __extends(AddCoffeeViewModel, _super);
    function AddCoffeeViewModel() {
        _super.call(this);
        this._coffeeService = new coffee_service_1.CoffeeService();
        this.set("Decaf", false);
    }
    AddCoffeeViewModel.prototype.addCoffee = function (cost, name, notes, region, acidity, elevation, processing, varietal, body) {
        this._coffeeService.postCoffee(this.selectedIndex, cost, name, notes, region, acidity, elevation, processing, varietal, body, this._Decaf);
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
    Object.defineProperty(AddCoffeeViewModel.prototype, "Decaf", {
        get: function () {
            return this._Decaf;
        },
        set: function (v) {
            this._Decaf = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddCoffeeViewModel.prototype, "picture", {
        get: function () {
            return this._picture;
        },
        set: function (value) {
            if (this._picture != value) {
                this._picture = value;
                this.notifyPropertyChange("picture", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    AddCoffeeViewModel.prototype.takePicture = function () {
        var _this = this;
        var options = {
            width: 320,
            height: 480,
            keepAspectRatio: true
        };
        cameraModule.takePicture(options).then(function (picture) {
            _this.picture = picture;
        });
    };
    return AddCoffeeViewModel;
}(observable_1.Observable));
exports.AddCoffeeViewModel = AddCoffeeViewModel;
//# sourceMappingURL=addCoffee-view-model.js.map