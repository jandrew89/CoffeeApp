"use strict";
var observable_1 = require('data/observable');
var coffee_service_1 = require('../../services/coffee-service');
var signoffbase_view_model_1 = require('../common/signoffbase-view-model');
var CoffeeViewModel = (function (_super) {
    __extends(CoffeeViewModel, _super);
    function CoffeeViewModel(source) {
        _super.call(this);
        this._coffeeService = new coffee_service_1.CoffeeService();
        this._coffee = source;
    }
    Object.defineProperty(CoffeeViewModel.prototype, "signOff", {
        get: function () {
            if (this.SignOff) {
                return true;
            }
            else
                return false;
        },
        set: function (v) {
            if (this._signOff !== v) {
                this._signOff = v;
                this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: 'signOff', value: this._signOff });
            }
        },
        enumerable: true,
        configurable: true
    });
    CoffeeViewModel.prototype.toggleSignOff = function () {
        this.signOff = !this.signOff;
    };
    Object.defineProperty(CoffeeViewModel.prototype, "coffeeSelection", {
        get: function () {
            return ["Light Roast", "Medium Roast", "Dark Roast"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeViewModel.prototype, "selectedIndex", {
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
    Object.defineProperty(CoffeeViewModel.prototype, "coffeeRoast", {
        get: function () {
            var coffeeType = this._coffee.CoffeeType;
            if (coffeeType == 1) {
                return "Light Coffee";
            }
            if (coffeeType == 2) {
                return "Medium Coffee";
            }
            else {
                return "Dark Coffee";
            }
        },
        enumerable: true,
        configurable: true
    });
    return CoffeeViewModel;
}(signoffbase_view_model_1.SignOffBaseViewModel));
exports.CoffeeViewModel = CoffeeViewModel;
//# sourceMappingURL=coffee-view-model.js.map