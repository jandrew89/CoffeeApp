import { Observable } from 'data/observable';
import { Coffee, SignOff } from '../../shared/interfaces';
import { CoffeeService } from '../../services/coffee-service';

import { BaseViewModel } from '../common/base-view-model';
import { SignOffBaseViewModel } from '../common/signoffbase-view-model';

export class CoffeeViewModel extends SignOffBaseViewModel {
    public _coffee: Coffee;
    private _selectedIndex: number;
    public _coffeeService: CoffeeService;
    private _signOff : boolean;
    

    constructor(source?: Coffee){
        super();

        this._coffeeService = new CoffeeService();
        this._coffee = source;
    }

  
   
   
   public get signOff() : boolean {
        if(this.SignOff){
             return true;
        } else 
        return false;
   }

   public set signOff(v : boolean) {
       if(this._signOff !== v){
           this._signOff = v;
           this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: 'signOff', value: this._signOff})
       }
   }
   
   public toggleSignOff(){

       this.signOff = !this.signOff;

   }

    get coffeeSelection(): Array<any> {
        return ["Light Roast", "Medium Roast", "Dark Roast"];
    }
 
    public get selectedIndex() : number {
        return this._selectedIndex;
    }

    public set selectedIndex(v : number) {
        v += 1;
        this._selectedIndex = v;
    }

    get coffeeRoast(): string {
        var coffeeType = this._coffee.CoffeeType;
        if (coffeeType == 1){
            return "Light Coffee";
        }
        if (coffeeType == 2){
            return "Medium Coffee";
        } else {
            return "Dark Coffee";
        }
    }

    

}