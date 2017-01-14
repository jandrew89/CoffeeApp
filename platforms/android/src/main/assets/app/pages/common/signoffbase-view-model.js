"use strict";
var base_view_model_1 = require('./base-view-model');
var SignOffBaseViewModel = (function (_super) {
    __extends(SignOffBaseViewModel, _super);
    function SignOffBaseViewModel() {
        _super.call(this);
    }
    Object.defineProperty(SignOffBaseViewModel.prototype, "SignOff", {
        get: function () {
            return this._SignOff;
        },
        set: function (v) {
            this._SignOff = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignOffBaseViewModel.prototype, "CoffeeId", {
        get: function () {
            return this._CoffeeId;
        },
        set: function (v) {
            this._CoffeeId = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignOffBaseViewModel.prototype, "Comments", {
        get: function () {
            return this._Comments;
        },
        set: function (v) {
            this._Comments = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignOffBaseViewModel.prototype, "Recommend", {
        get: function () {
            return this._Recommend;
        },
        set: function (v) {
            this._Recommend = v;
        },
        enumerable: true,
        configurable: true
    });
    SignOffBaseViewModel.prototype.addSignOff = function (comments) {
        this.set("Comments", comments);
        this.get("SignOff");
        this.get("Recommend");
        //this._coffeeService.postSignOff(this.Id, this.SignOff, comments, this.Recommend);
    };
    return SignOffBaseViewModel;
}(base_view_model_1.BaseViewModel));
exports.SignOffBaseViewModel = SignOffBaseViewModel;
//# sourceMappingURL=signoffbase-view-model.js.map