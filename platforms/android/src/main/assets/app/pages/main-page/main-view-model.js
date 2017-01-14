"use strict";
var observable_1 = require('data/observable');
var coffee_service_1 = require('../../services/coffee-service');
var coffee_view_model_1 = require('../coffee-page/coffee-view-model');
var static_data_1 = require('../../shared/static-data');
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        this._allCoffees = new Array();
        this._selectedIndex = 0;
        this.selectedIndex = 1;
        this._coffeeService = new coffee_service_1.CoffeeService();
        this.set('isLoading', true);
        this.init();
    }
    Object.defineProperty(MainViewModel.prototype, "beverageOptions", {
        get: function () {
            return static_data_1.beverageOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainViewModel.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            if (this._selectedIndex !== value) {
                this._selectedIndex = value;
                this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: "selectedIndex", value: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainViewModel.prototype, "coffees", {
        get: function () {
            this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: "coffees", value: this._coffees });
            return this._coffees;
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.init = function () {
        var _this = this;
        this._coffeeService.coffeeViaHttp()
            .then(function (result) {
            _this.pushCoffee(result);
            _this.onDataLoading();
        });
    };
    MainViewModel.prototype.pushCoffee = function (coffeeFromService) {
        for (var i = 0; i < coffeeFromService.length; i++) {
            var newCoffee = new coffee_view_model_1.CoffeeViewModel(coffeeFromService[i]);
            this._allCoffees.push(newCoffee);
        }
    };
    MainViewModel.prototype.onDataLoading = function () {
        this.set('isLoading', false);
        this.filter();
    };
    MainViewModel.prototype.filter = function () {
        this._coffees = this._allCoffees;
        this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: "coffees", value: this._coffees });
    };
    MainViewModel.prototype.editCoffee = function (id, cost, name, notes, region, acidity, elevation, processing, varietal, body) {
        this._coffeeService.editCoffee(id, cost, name, notes, region, acidity, elevation, processing, varietal, body);
        this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: "coffees", value: this._coffees });
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map