"use strict";
var frameModule = require('ui/frame');
function startingPage() {
    return 'pages/main-page/main-page';
}
exports.startingPage = startingPage;
function gotoCoffeePage(coffee) {
    frameModule.topmost().navigate({
        moduleName: 'pages/coffee-page/coffee-page',
        context: coffee
    });
}
exports.gotoCoffeePage = gotoCoffeePage;
function goBack() {
    frameModule.topmost().goBack();
}
exports.goBack = goBack;
function gotoWorkflowPage() {
    frameModule.topmost().navigate({
        moduleName: 'pages/workflow-page/workflow-page'
    });
}
exports.gotoWorkflowPage = gotoWorkflowPage;
function gotoAddCoffeePage() {
    frameModule.topmost().navigate({
        moduleName: 'pages/addCoffee-page/addCoffee-page'
    });
}
exports.gotoAddCoffeePage = gotoAddCoffeePage;
function gotoEditCoffeePage(coffee) {
    frameModule.topmost().navigate({
        moduleName: 'pages/editCoffee-page/editCoffee-page',
        context: coffee
    });
}
exports.gotoEditCoffeePage = gotoEditCoffeePage;
function gotoSignOffPage(coffee) {
    frameModule.topmost().navigate({
        moduleName: 'pages/signOff-page/signOff-page',
        context: coffee
    });
}
exports.gotoSignOffPage = gotoSignOffPage;
//# sourceMappingURL=navigation.js.map