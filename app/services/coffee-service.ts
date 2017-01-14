import * as httpModule from 'http';
import * as constModule from '../shared/constants';

export class CoffeeService {



    public coffeeViaHttp<T>() : Promise<T> {
         var reqParams = {
             url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLCoffeeName,
             method: 'GET'
         };
         return httpModule.getJSON<T>(reqParams);
    }

    private loadActiveWorkflows<T>(): Promise<T> {
        var reqParams = {
             url: constModule.steveURL,
             method: 'GET',
             data: 'userID=Christman,Steve',
             contenttype: 'application/json; charset=utf-8'
         };
         return httpModule.getJSON<T>(reqParams);
    }

    public loadHeaderViaHttp<T>() : Promise<T> {
         var reqParams = {
             url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLWorkflowName,
             method: 'GET'
         };
         return httpModule.getJSON<T>(reqParams);
    }

    public getSignOff<T>(id) : Promise<T> {
        var reqParams = {
             url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLSignOffName + "/" + id,
             method: 'GET'
         };
         return httpModule.getJSON<T>(reqParams);
    }

     public getAllSignOff<T>() : Promise<T> {
        var reqParams = {
             url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLSignOffName,
             method: 'GET'
         };
         return httpModule.getJSON<T>(reqParams);
    }

    public postSignOff = function(id, signOff, comments, recommend){
        
        httpModule.request({
            url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLSignOffName + "/" + id,
            method: "POST",
            content: JSON.stringify({
                SignOff: signOff,
                Comments: comments,
                Recommend: recommend
            })
        }), function(error) {
            console.log(JSON.stringify(error));
        }
    }

    public postCoffee = function(coffeeType, cost, name, notes, region, acidity, elevation, processing,varietal, body, decaf) {
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
          }), function(error) {
              console.log(JSON.stringify(error));
          }
    }

    public editCoffee = function(id, cost, name, notes, region, acidity, elevation, processing,varietal, body) {
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
        }).then(function(error){
            console.log(JSON.stringify(error));
        })
    }

    public deleteCoffee = function(id) {
        httpModule.request({
            url: constModule.awsURL + constModule.awsURLTablePath + constModule.awsURLCoffeeName + "/" + id,
            method: "DELETE"
        }).then(function(error){
            console.log(JSON.stringify(error));
        })
    }

}