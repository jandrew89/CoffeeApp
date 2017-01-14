import {Page, NavigatedData} from 'ui/page';
import { EventData } from 'data/observable';
import * as navigationModule from '../../shared/navigation';
import { WorkflowViewModel} from './workflow-view-model';

var vm = new WorkflowViewModel();
var page: Page;

export function pageNavigatingTo(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = vm;
    vm.init();
}