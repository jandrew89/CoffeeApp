"use strict";
var workflow_view_model_1 = require('./workflow-view-model');
var vm = new workflow_view_model_1.WorkflowViewModel();
var page;
function pageNavigatingTo(args) {
    page = args.object;
    page.bindingContext = vm;
    vm.init();
}
exports.pageNavigatingTo = pageNavigatingTo;
//# sourceMappingURL=workflow-page.js.map