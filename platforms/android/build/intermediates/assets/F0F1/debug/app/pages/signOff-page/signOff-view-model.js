"use strict";
var coffee_view_model_1 = require('../coffee-page/coffee-view-model');
var SignOffViewModel = (function (_super) {
    __extends(SignOffViewModel, _super);
    function SignOffViewModel() {
        _super.call(this);
    }
    Object.defineProperty(SignOffViewModel.prototype, "CoffeeId", {
        get: function () {
            return this._CoffeeId;
        },
        set: function (v) {
            this._CoffeeId = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignOffViewModel.prototype, "SignOff", {
        get: function () {
            return this._SignOff;
        },
        set: function (v) {
            this._SignOff = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignOffViewModel.prototype, "Comments", {
        get: function () {
            return this._Comments;
        },
        set: function (v) {
            this._Comments = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignOffViewModel.prototype, "Recommend", {
        get: function () {
            return this._Recommend;
        },
        set: function (v) {
            this._Recommend = v;
        },
        enumerable: true,
        configurable: true
    });
    SignOffViewModel.prototype.addSignOff = function (signOff, comments, recommend) {
        this.set("Comments", comments);
        this.set("SignOff", signOff);
        this.set("Recommend", recommend);
        console.log(this.Id);
        //this._coffeeService.postSignOff(this.Id, signOff, comments, recommend);
    };
    return SignOffViewModel;
}(coffee_view_model_1.CoffeeViewModel));
exports.SignOffViewModel = SignOffViewModel;
//# sourceMappingURL=signOff-view-model.js.map