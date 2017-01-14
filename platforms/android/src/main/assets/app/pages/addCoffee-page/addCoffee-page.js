"use strict";
var navigationModule = require('../../shared/navigation');
var addCoffee_view_model_1 = require('./addCoffee-view-model');
var textFieldModule = require("ui/text-field");
var coffee_view_model_1 = require('../coffee-page/coffee-view-model');
var cvm = new coffee_view_model_1.CoffeeViewModel();
var acvm = new addCoffee_view_model_1.AddCoffeeViewModel();
var page;
var view;
var image;
var textField = new textFieldModule.TextField();
var imageContainer;
var darkCoffee = 3;
var mediumCoffee = 2;
var lightCoffee = 1;
function pageNavigatingTo(args) {
    page = args.object;
    acvm = new addCoffee_view_model_1.AddCoffeeViewModel();
    page.bindingContext = acvm;
    imageContainer = page.getViewById("coffeePic");
}
exports.pageNavigatingTo = pageNavigatingTo;
function addCoffee(args) {
    var coffee = page.bindingContext;
    var name = page.getViewById("name").get('text');
    var cost = page.getViewById("cost").get('text');
    var notes = page.getViewById("notes").get('text');
    var region = page.getViewById("region").get('text');
    var acidity = page.getViewById("acidity").get('text');
    var elevation = page.getViewById("elevation").get('text');
    var processing = page.getViewById("processing").get('text');
    var varietal = page.getViewById("varietal").get('text');
    var body = page.getViewById("body").get('text');
    acvm.addCoffee(cost, name, notes, region, acidity, elevation, processing, varietal, body);
    navigationModule.gotoCoffeePage(coffee);
}
exports.addCoffee = addCoffee;
function backTap(args) {
    navigationModule.goBack();
}
exports.backTap = backTap;
function coffeeCamera() {
    acvm.takePicture();
}
exports.coffeeCamera = coffeeCamera;
//# sourceMappingURL=addCoffee-page.js.map