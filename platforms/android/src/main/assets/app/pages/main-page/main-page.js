"use strict";
var main_view_model_1 = require('./main-view-model');
var coffee_view_model_1 = require('../coffee-page/coffee-view-model');
var addCoffee_view_model_1 = require('../addCoffee-page/addCoffee-view-model');
var dialogs = require("ui/dialogs");
var navigationModule = require('../../shared/navigation');
var page;
var mvm = new main_view_model_1.MainViewModel();
var cvm = new coffee_view_model_1.CoffeeViewModel();
var acvm = new addCoffee_view_model_1.AddCoffeeViewModel();
var SIDE_DRAWER_ID = 'SideDrawer';
function pageLoaded(args) {
    page = args.object;
    page.bindingContext = mvm;
}
exports.pageLoaded = pageLoaded;
function selectCoffee(args) {
    var coffee = args.view.bindingContext;
    navigationModule.gotoCoffeePage(coffee);
}
exports.selectCoffee = selectCoffee;
function itemSelectCoffee(args) {
    var coffee = args.object;
    navigationModule.gotoCoffeePage(coffee);
}
exports.itemSelectCoffee = itemSelectCoffee;
function gotoWorkflowPage(args) {
    navigationModule.gotoWorkflowPage();
}
exports.gotoWorkflowPage = gotoWorkflowPage;
function showSlideout(args) {
    var slideBar = page.getViewById(SIDE_DRAWER_ID);
    slideBar.showDrawer();
}
exports.showSlideout = showSlideout;
function refreshList(args) {
    var pullRefresh = args.object;
    this.get("coffees");
    pullRefresh.refreshing = false;
}
function gotoAddCoffee(args) {
    navigationModule.gotoAddCoffeePage();
}
exports.gotoAddCoffee = gotoAddCoffee;
function overflowMenu(args) {
    var coffee = args.view.bindingContext;
    var id = coffee.Id;
    dialogs.action({
        actions: ["Delete Coffee", 'Add Coffee', "Edit Coffee"],
        message: "Options",
        cancelButtonText: "Cancel"
    }).then(function (result) {
        if (result == "Add Coffee") {
            navigationModule.gotoAddCoffeePage();
        }
        if (result == "Edit Coffee") {
            navigationModule.gotoEditCoffeePage(coffee);
        }
        if (result == "Delete Coffee") {
            dialogs.action({ actions: ["Yes", "No"],
                message: "Are You Sure You Wanna Delete",
                cancelButtonText: "Cancel"
            }).then(function (result) {
                if (result == "Yes") {
                    console.log("Dialog result: " + result);
                    acvm.deleteCoffee(id);
                }
            });
        }
    });
}
exports.overflowMenu = overflowMenu;
//# sourceMappingURL=main-page.js.map