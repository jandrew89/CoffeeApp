import {Page, NavigatedData} from 'ui/page';
import {GestureEventData} from 'ui/gestures';
import { EventData, Observable } from 'data/observable';
import {SignOffViewModel} from './signOff-view-model';
import * as navigationModule from '../../shared/navigation';
import { Switch } from "ui/switch";

var sovm: SignOffViewModel;
var page: Page;

export function pageNavigatingTo(args: NavigatedData) {
     page = <Page>args.object;
     sovm = args.context;
     
     page.bindingContext = sovm;

}

export function backTap(args: GestureEventData) {
    navigationModule.goBack();
}



export function signOff(args: GestureEventData){

     var Comments = page.getViewById("Comments").get("text");
    
     
    sovm.addSignOff(Comments);
    navigationModule.goBack();
}

