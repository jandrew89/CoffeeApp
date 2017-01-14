import {Page, NavigatedData} from 'ui/page';
import {Image} from 'ui/image';
import { EventData, Observable } from 'data/observable';
import {GestureEventData} from 'ui/gestures';
import * as navigationModule from '../../shared/navigation';
import { AddCoffeeViewModel } from './addCoffee-view-model';
import textFieldModule = require("ui/text-field");
import * as cameraModule from 'camera';
import { View } from 'ui/core/view';
import { Coffee } from '../../shared/interfaces';
import { CoffeeViewModel } from '../coffee-page/coffee-view-model';

var cvm = new CoffeeViewModel();
var acvm = new AddCoffeeViewModel();
var page: Page;
var view: View;
var image: Image;
var textField = new textFieldModule.TextField();
var imageContainer;
const darkCoffee: number = 3
const mediumCoffee: number = 2;
const lightCoffee: number = 1;

export function pageNavigatingTo(args: EventData) {
    
    page = <Page>args.object;
    acvm = new AddCoffeeViewModel();
    
    page.bindingContext = acvm;
    imageContainer = page.getViewById("coffeePic");
}

export function addCoffee(args: GestureEventData){
    var coffee = <CoffeeViewModel>page.bindingContext;

    
    var name = page.getViewById("name").get('text');
    var cost = page.getViewById("cost").get('text');
    var notes = page.getViewById("notes").get('text');
    var region = page.getViewById("region").get('text');
    var acidity = page.getViewById("acidity").get('text');
    var elevation = page.getViewById("elevation").get('text');
    var processing = page.getViewById("processing").get('text');
    var varietal = page.getViewById("varietal").get('text');
    var body = page.getViewById("body").get('text');
    
    acvm.addCoffee(cost, name, notes, region, acidity, elevation, processing,varietal,body);
    navigationModule.gotoCoffeePage(coffee);
}

export function backTap(args: GestureEventData) {
    navigationModule.goBack();
}


export function coffeeCamera() {
    acvm.takePicture();
}


