"use strict";
var signOff_view_model_1 = require('../signOff-page/signOff-view-model');
var navigationModule = require('../../shared/navigation');
var sovm = new signOff_view_model_1.SignOffViewModel();
var vm;
var page;
function pageNavigatingTo(args) {
    page = args.object;
    vm = args.context;
    page.bindingContext = vm;
}
exports.pageNavigatingTo = pageNavigatingTo;
function backTap(args) {
    navigationModule.goBack();
}
exports.backTap = backTap;
function editCoffee(args) {
    var coffee = page.bindingContext;
    navigationModule.gotoEditCoffeePage(coffee);
}
exports.editCoffee = editCoffee;
function signOffPage(args) {
    var coffee = page.bindingContext;
    navigationModule.gotoSignOffPage(coffee);
}
exports.signOffPage = signOffPage;
//# sourceMappingURL=coffee-page.js.map