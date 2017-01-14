"use strict";
var observable_1 = require('data/observable');
var coffee_service_1 = require('../../services/coffee-service');
var CoffeeViewModel = (function (_super) {
    __extends(CoffeeViewModel, _super);
    function CoffeeViewModel(source) {
        _super.call(this);
        this._coffeeService = new coffee_service_1.CoffeeService();
        if (source) {
            this._coffee = source;
        }
    }
    Object.defineProperty(CoffeeViewModel.prototype, "Id", {
        get: function () {
            return this._coffee.Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeViewModel.prototype, "CoffeeType", {
        get: function () {
            return this._coffee.CoffeeType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeViewModel.prototype, "Cost", {
        get: function () {
            return this._coffee.Cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeViewModel.prototype, "Name", {
        get: function () {
            return this._coffee.Name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeViewModel.prototype, "Notes", {
        get: function () {
            return this._coffee.Notes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeViewModel.prototype, "Region", {
        get: function () {
            return this._coffee.Region;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeViewModel.prototype, "Acidity", {
        get: function () {
            return this._coffee.Acidity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeViewModel.prototype, "Body", {
        get: function () {
            return this._coffee.Body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeViewModel.prototype, "Elevation", {
        get: function () {
            return this._coffee.Elevation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeViewModel.prototype, "Processing", {
        get: function () {
            return this._coffee.Processing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeViewModel.prototype, "Varietal", {
        get: function () {
            return this._coffee.Varietal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoffeeViewModel.prototype, "Decaf", {
        get: function () {
            return this._coffee.Decaf;
        },
        enumerable: true,
        configurable: true
    });
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
}(observable_1.Observable));
exports.CoffeeViewModel = CoffeeViewModel;
//# sourceMappingURL=coffee-view-model.js.map