import {Page, NavigatedData} from 'ui/page';
import {Image} from 'ui/image';
import { EventData, Observable } from 'data/observable';
import {GestureEventData} from 'ui/gestures';
import * as navigationModule from '../../shared/navigation';
import { EditCoffeeViewModel } from './editCoffee-view-model';
import { CoffeeViewModel } from '../coffee-page/coffee-view-model';
import { MainViewModel } from '../main-page/main-view-model';
import { AddCoffeeViewModel } from '../addcoffee-page/addCoffee-view-model';
import textFieldModule = require("ui/text-field");
import * as cameraModule from 'camera';
import { View } from 'ui/core/view';
import { Coffee } from '../../shared/interfaces';

var mvm = new MainViewModel();
var ecvm: EditCoffeeViewModel;
var cvm: CoffeeViewModel;
var acvm: AddCoffeeViewModel;
var page: Page;
var view: View;
var image: Image;
var imageContainer;
var textField = new textFieldModule.TextField();

export function pageNavigatingTo(args: NavigatedData) {
    
    page = <Page>args.object;
    cvm = args.context;
    
    page.bindingContext = cvm;

    var coffeeT = cvm.get("CoffeeType");
    coffeeT -= 1;
    cvm.set("selectedIndex", coffeeT);
    
    imageContainer = page.getViewById("coffeePic");
}

export function backTap(args: GestureEventData) {
    navigationModule.goBack();
}


export function addCoffee(args: EventData){
    var coffee = <CoffeeViewModel>args.object;
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


    mvm.editCoffee(id, cost, name, notes, region, acidity, elevation, processing,varietal,body);
    navigationModule.goBack();
}