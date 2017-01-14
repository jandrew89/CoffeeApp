"use strict";
var httpModule = require('http');
var constModule = require('../shared/constants');
var CoffeeService = (function () {
    function CoffeeService() {
        this.postSignOff = function (id, signOff, comments, recommend) {
            httpModule.request({
                url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLSignOffName + "/" + id,
                method: "POST",
                content: JSON.stringify({
                    SignOff: signOff,
                    Comments: comments,
                    Recommend: recommend
                })
            }), function (error) {
                console.log(JSON.stringify(error));
            };
        };
        this.postCoffee = function (coffeeType, cost, name, notes, region, acidity, elevation, processing, varietal, body, decaf) {
            //console.log(cost + name + notes + coffeeType + decaf);
            httpModule.request({
                url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLCoffeeName,
                method: "POST",
                content: JSON.stringify({
                    CoffeeType: coffeeType,
                    Cost: cost,
                    Name: name,
                    Notes: notes,
                    Region: region,
                    Acidity: acidity,
                    Body: body,
                    Elevation: elevation,
                    Varietal: varietal,
                    Decaf: decaf,
                    SignOff: "false"
                })
            }), function (error) {
                console.log(JSON.stringify(error));
            };
        };
        this.editCoffee = function (id, cost, name, notes, region, acidity, elevation, processing, varietal, body) {
            httpModule.request({
                url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLCoffeeName + "/" + id,
                method: "PUT",
                content: JSON.stringify({
                    Cost: cost,
                    Name: name,
                    Notes: notes,
                    Region: region,
                    Acidity: acidity,
                    Body: body,
                    Elevation: elevation,
                    Varietal: varietal
                })
            }).then(function (error) {
                console.log(JSON.stringify(error));
            });
        };
        this.deleteCoffee = function (id) {
            httpModule.request({
                url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLCoffeeName + "/" + id,
                method: "DELETE"
            }).then(function (error) {
                console.log(JSON.stringify(error));
            });
        };
    }
    CoffeeService.prototype.coffeeViaHttp = function () {
        var reqParams = {
            url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLCoffeeName,
            method: 'GET'
        };
        return httpModule.getJSON(reqParams);
    };
    CoffeeService.prototype.loadActiveWorkflows = function () {
        var reqParams = {
            url: constModule.steveURL,
            method: 'GET',
            data: 'userID=Christman,Steve',
            contenttype: 'application/json; charset=utf-8'
        };
        return httpModule.getJSON(reqParams);
    };
    CoffeeService.prototype.loadHeaderViaHttp = function () {
        var reqParams = {
            url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLWorkflowName,
            method: 'GET'
        };
        return httpModule.getJSON(reqParams);
    };
    CoffeeService.prototype.getSignOff = function (id) {
        var reqParams = {
            url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLSignOffName + "/" + id,
            method: 'GET'
        };
        return httpModule.getJSON(reqParams);
    };
    CoffeeService.prototype.getAllSignOff = function () {
        var reqParams = {
            url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLSignOffName,
            method: 'GET'
        };
        return httpModule.getJSON(reqParams);
    };
    return CoffeeService;
}());
exports.CoffeeService = CoffeeService;
//# sourceMappingURL=coffee-service.js.map