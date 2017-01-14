"use strict";
var observable_1 = require('data/observable');
var coffee_service_1 = require('../../services/coffee-service');
var BaseViewModel = (function (_super) {
    __extends(BaseViewModel, _super);
    function BaseViewModel(source) {
        _super.call(this);
        this._coffeeService = new coffee_service_1.CoffeeService();
        this._coffee = source;
    }
    Object.defineProperty(BaseViewModel.prototype, "Id", {
        get: function () {
            return this._coffee.Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "CoffeeType", {
        get: function () {
            return this._coffee.CoffeeType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "Cost", {
        get: function () {
            return this._coffee.Cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "Name", {
        get: function () {
            return this._coffee.Name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "Notes", {
        get: function () {
            return this._coffee.Notes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "Region", {
        get: function () {
            return this._coffee.Region;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "Acidity", {
        get: function () {
            return this._coffee.Acidity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "Body", {
        get: function () {
            return this._coffee.Body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "Elevation", {
        get: function () {
            return this._coffee.Elevation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "Processing", {
        get: function () {
            return this._coffee.Processing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "Varietal", {
        get: function () {
            return this._coffee.Varietal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "Decaf", {
        get: function () {
            return this._coffee.Decaf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "SignOff", {
        get: function () {
            return this._coffee.SignOff;
        },
        enumerable: true,
        configurable: true
    });
    return BaseViewModel;
}(observable_1.Observable));
exports.BaseViewModel = BaseViewModel;
//# sourceMappingURL=base-view-model.js.map