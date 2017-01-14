"use strict";
var observable_1 = require('data/observable');
var coffee_service_1 = require('../../services/coffee-service');
var WorkflowViewModel = (function (_super) {
    __extends(WorkflowViewModel, _super);
    function WorkflowViewModel(source) {
        _super.call(this);
        this._workflowArray = new Array();
        this._coffeeService = new coffee_service_1.CoffeeService();
    }
    WorkflowViewModel.prototype.init = function () {
        var _this = this;
        this._coffeeService.loadHeaderViaHttp()
            .then(function (result) {
            _this.pushWorkflows(result);
            _this.onDataLoading();
        });
    };
    WorkflowViewModel.prototype.pushWorkflows = function (workflowsFromService) {
        for (var i = 0; i < workflowsFromService.length; i++) {
            var newWorkflow = new Array(workflowsFromService[i]);
            this._workflowArray.push(newWorkflow);
        }
    };
    WorkflowViewModel.prototype.onDataLoading = function () {
        this._allWorkflows = this._workflowArray;
        this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: "workflows", value: this._workflowArray });
        console.log(this._allWorkflows);
    };
    Object.defineProperty(WorkflowViewModel.prototype, "workflows", {
        get: function () {
            return this._allWorkflows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkflowViewModel.prototype, "Id", {
        get: function () {
            return this._workflows.Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkflowViewModel.prototype, "BP", {
        get: function () {
            return this._workflows.BP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkflowViewModel.prototype, "Description", {
        get: function () {
            return this._workflows.Description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkflowViewModel.prototype, "Priority", {
        get: function () {
            return this._workflows.Priority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkflowViewModel.prototype, "RequestedBy", {
        get: function () {
            return this._workflows.RequestedBy;
        },
        enumerable: true,
        configurable: true
    });
    return WorkflowViewModel;
}(observable_1.Observable));
exports.WorkflowViewModel = WorkflowViewModel;
//# sourceMappingURL=workflow-view-model.js.map