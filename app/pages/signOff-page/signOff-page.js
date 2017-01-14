"use strict";
var navigationModule = require('../../shared/navigation');
var sovm;
var page;
function pageNavigatingTo(args) {
    page = args.object;
    sovm = args.context;
    page.bindingContext = sovm;
}
exports.pageNavigatingTo = pageNavigatingTo;
function backTap(args) {
    navigationModule.goBack();
}
exports.backTap = backTap;
function signOff(args) {
    var Comments = page.getViewById("Comments").get("text");
    sovm.addSignOff(Comments);
    navigationModule.goBack();
}
exports.signOff = signOff;
//# sourceMappingURL=signOff-page.js.map