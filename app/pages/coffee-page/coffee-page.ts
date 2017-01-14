import {Label} from 'ui/label';
import {GestureEventData} from 'ui/gestures';
import {Page, NavigatedData} from 'ui/page';
import { ItemEventData } from 'ui/list-view';
import {CoffeeViewModel} from './coffee-view-model';
import {MainViewModel} from '../main-page/main-view-model';
import { EventData } from 'data/observable';
import { SignOffViewModel } from '../signOff-page/signOff-view-model';
import * as navigationModule from '../../shared/navigation';

var sovm = new SignOffViewModel();
var vm: CoffeeViewModel;
var page: Page;

export function pageNavigatingTo(args: NavigatedData) {
    page = <Page>args.object;
    vm = args.context;
    page.bindingContext = vm;
}

export function backTap(args: GestureEventData) {
    navigationModule.goBack();
}

export function editCoffee(args: EventData){
    var coffee = <CoffeeViewModel>page.bindingContext;
    navigationModule.gotoEditCoffeePage(coffee);
    
}

export function signOffPage(args: GestureEventData){
    var coffee = <CoffeeViewModel>page.bindingContext;
    navigationModule.gotoSignOffPage(coffee);
}

export function toggleSignOff(args) {
    var coffee = <CoffeeViewModel>page.bindingContext;
    var gl = <any>args.object;
    var img = gl.getViewById('checkedSign');
    if (vm.SignOff == false)
        navigationModule.gotoSignOffPage(coffee);
}