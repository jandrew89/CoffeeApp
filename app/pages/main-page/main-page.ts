import { EventData } from 'data/observable';
import {GestureEventData} from 'ui/gestures';
import { Page } from 'ui/page';
import { ItemEventData } from 'ui/list-view';
import { MainViewModel } from './main-view-model';
import { CoffeeViewModel } from '../coffee-page/coffee-view-model';
import { AddCoffeeViewModel } from '../addCoffee-page/addCoffee-view-model';
import dialogs = require("ui/dialogs");
import * as navigationModule from '../../shared/navigation';
import listViewModule = require("nativescript-telerik-ui/listview");

var page: Page;
var mvm = new MainViewModel();
var cvm = new CoffeeViewModel();
var acvm = new AddCoffeeViewModel();
var SIDE_DRAWER_ID = 'SideDrawer';

export function pageLoaded(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = mvm;
    }

export function selectCoffee(args: ItemEventData) {
    var coffee = <CoffeeViewModel>args.view.bindingContext;
    navigationModule.gotoCoffeePage(coffee);
}

export function itemSelectCoffee(args: listViewModule.ListViewEventData) {
     var coffee = <CoffeeViewModel>args.object;
    
    navigationModule.gotoCoffeePage(coffee);
}

export function gotoWorkflowPage(args: GestureEventData) {
    navigationModule.gotoWorkflowPage();
}

 export function showSlideout(args: GestureEventData) {
     var slideBar = <any>page.getViewById(SIDE_DRAWER_ID);
     slideBar.showDrawer();
 }

function refreshList(args) {
    var pullRefresh = args.object;
    this.get("coffees")
    pullRefresh.refreshing = false;
    
}


export function gotoAddCoffee(args: GestureEventData) {
    navigationModule.gotoAddCoffeePage();
}


export function overflowMenu(args: ItemEventData){

    var coffee = <CoffeeViewModel>args.view.bindingContext;
    var id = coffee.Id;

    dialogs.action({
        actions: ["Delete Coffee", 'Add Coffee', "Edit Coffee"],
        message: "Options",
        cancelButtonText: "Cancel"
    }).then(result => {
        if (result == "Add Coffee"){
            navigationModule.gotoAddCoffeePage();
            
        }
        if (result == "Edit Coffee"){  
            
            navigationModule.gotoEditCoffeePage(coffee);
        }
        if (result == "Delete Coffee"){
            dialogs.action({ actions:["Yes","No"],
            message:"Are You Sure You Wanna Delete",
            cancelButtonText: "Cancel"
        }).then(result => {
            if (result == "Yes"){
                console.log("Dialog result: " + result);
                acvm.deleteCoffee(id);
            }
        })}
    });
}