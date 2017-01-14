import { Observable } from 'data/observable';
import { Workflows } from '../../shared/interfaces';
import { CoffeeService } from '../../services/coffee-service';

export class WorkflowViewModel extends Observable {
    private _workflowArray: Array<any> = new Array<any>();
    private _allWorkflows: Array<any>;
    private _workflows: Workflows;
    private _coffeeService: CoffeeService; 

    constructor(source?: Workflows){
        super();

        this._coffeeService = new CoffeeService();
    }


    public init() {
         this._coffeeService.loadHeaderViaHttp<Array<Workflows>>()
             .then((result: Array<Workflows>) => {
                 this.pushWorkflows(result);
                 this.onDataLoading();
             });
    }

    private pushWorkflows(workflowsFromService: Array<Workflows>){
        for (var i = 0; i < workflowsFromService.length; i++){
            var newWorkflow = new Array(workflowsFromService[i]);
            this._workflowArray.push(newWorkflow);
        }
    } 

    private onDataLoading() {
        this._allWorkflows = this._workflowArray;
        this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName:"workflows", value: this._workflowArray});
        console.log(this._allWorkflows);    
    }
    get workflows(): Array<Workflows> {
        return this._allWorkflows;
        
    }

    get Id(): number {
        return this._workflows.Id;
    }

    get BP(): string {
        return this._workflows.BP;
    }

    get Description(): string {
        return this._workflows.Description;
    }

    get Priority(): number {
        return this._workflows.Priority;
    }

    get RequestedBy(): string {
        return this._workflows.RequestedBy;
    }


}