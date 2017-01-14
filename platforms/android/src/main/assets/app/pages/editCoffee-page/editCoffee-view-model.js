"use strict";
var observable_1 = require('data/observable');
var coffee_service_1 = require('../../services/coffee-service');
var EditCoffeeViewModel = (function (_super) {
    __extends(EditCoffeeViewModel, _super);
    function EditCoffeeViewModel(coffee) {
        _super.call(this);
        this._coffee = coffee;
        this._coffeeService = new coffee_service_1.CoffeeService();
    }
    EditCoffeeViewModel.prototype.editCoffee = function (id, cost, name, notes, region, acidity, elevation, processing, varietal, body) {
        this._coffeeService.editCoffee(id, cost, name, notes, region, acidity, elevation, processing, varietal, body);
    };
    return EditCoffeeViewModel;
}(observable_1.Observable));
exports.EditCoffeeViewModel = EditCoffeeViewModel;
//# sourceMappingURL=editCoffee-view-model.js.map