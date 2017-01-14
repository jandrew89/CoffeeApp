"use strict";
var navigationModule = require('../../shared/navigation');
var editCoffee_view_model_1 = require('./editCoffee-view-model');
var coffee_view_model_1 = require('../coffee-page/coffee-view-model');
var main_view_model_1 = require('../main-page/main-view-model');
var textFieldModule = require("ui/text-field");
var mvm = new main_view_model_1.MainViewModel();
var ecvm;
var cvm;
var acvm;
var page;
var view;
var image;
var imageContainer;
var textField = new textFieldModule.TextField();
function pageNavigatingTo(args) {
    page = args.object;
    cvm = args.context;
    page.bindingContext = cvm;
    var coffeeT = cvm.get("CoffeeType");
    coffeeT -= 1;
    cvm.set("selectedIndex", coffeeT);
    imageContainer = page.getViewById("coffeePic");
}
exports.pageNavigatingTo = pageNavigatingTo;
function backTap(args) {
    navigationModule.goBack();
}
exports.backTap = backTap;
function addCoffee(args) {
    var coffee = args.object;
    var id = cvm.Id;
    var name = page.getViewById("name").get('text');
    var cost = page.getViewById("cost").get('text');
    var notes = page.getViewById("notes").get('text');
    var region = page.getViewById("region").get('text');
    var acidity = page.getViewById("acidity").get('text');
    var elevation = page.getViewById("elevation").get('text');
    var processing = page.getViewById("processing").get('text');
    var varietal = page.getViewById("varietal").get('text');
    var body = page.getViewById("body").get('text');
    ecvm = new editCoffee_view_model_1.EditCoffeeViewModel();
    cvm = new coffee_view_model_1.CoffeeViewModel();
    mvm.editCoffee(id, cost, name, notes, region, acidity, elevation, processing, varietal, body);
    //ecvm.editCoffee(id, cost, name, notes, region, acidity, elevation, processing,varietal,body);
    navigationModule.goBack();
}
exports.addCoffee = addCoffee;
//# sourceMappingURL=editCoffee-page.js.map