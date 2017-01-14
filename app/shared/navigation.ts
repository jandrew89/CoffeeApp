import * as frameModule from 'ui/frame';

export function startingPage() {
    return 'pages/main-page/main-page';
}

export function gotoCoffeePage(coffee) {
    frameModule.topmost().navigate({
        moduleName: 'pages/coffee-page/coffee-page',
        context: coffee
    });
}

export function goBack() {
    frameModule.topmost().goBack();
}

export function gotoWorkflowPage() {
    frameModule.topmost().navigate({
        moduleName: 'pages/workflow-page/workflow-page'
    });
}

export function gotoAddCoffeePage() {
     frameModule.topmost().navigate({
         moduleName: 'pages/addCoffee-page/addCoffee-page'
     });
 }
 export function gotoEditCoffeePage(coffee) {
     frameModule.topmost().navigate({
         moduleName: 'pages/editCoffee-page/editCoffee-page',
         context: coffee
     });
 }

 export function gotoSignOffPage(coffee) {
     frameModule.topmost().navigate({
         moduleName: 'pages/signOff-page/signOff-page',
         context: coffee
     });
 }

