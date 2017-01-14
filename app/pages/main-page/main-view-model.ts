import { Observable } from 'data/observable';
import { Coffee, BeverageChoices } from '../../shared/interfaces';
import { CoffeeService } from '../../services/coffee-service';
import { CoffeeViewModel } from '../coffee-page/coffee-view-model';
import { beverageOptions } from '../../shared/static-data';

export class MainViewModel extends Observable {
    private _allCoffees: Array<CoffeeViewModel> = new Array<CoffeeViewModel>();
    private _coffees: Array<CoffeeViewModel>;
    private _coffeeService: CoffeeService; 
    
    private _selectedIndex;

    constructor() {
        super()
        this._selectedIndex = 0;
        this.selectedIndex = 1;
        this._coffeeService = new CoffeeService();
        this.set('isLoading', true);
        this.init();
    }

    get beverageOptions(): Array<BeverageChoices>{
        return beverageOptions;
    }

    
    get selectedIndex() : number {
        return this._selectedIndex;
    }

    set selectedIndex(value : number) {
        if (this._selectedIndex !== value){
            this._selectedIndex = value;
            
            this.notify({object: this, eventName: Observable.propertyChangeEvent, propertyName: "selectedIndex", value: value});
            //this.filter(value);
        }
    }
   

    get coffees(): Array<CoffeeViewModel> {
        this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: "coffees", value: this._coffees});
        return this._coffees;

    }

    public init() {
      this._coffeeService.coffeeViaHttp<Array<Coffee>>()
            .then((result: Array<Coffee>) => {
                this.pushCoffee(result);
                this.onDataLoading();
            });
    }

    private pushCoffee(coffeeFromService: Array<Coffee>){
        for (var i = 0; i < coffeeFromService.length; i++) {
            var newCoffee = new CoffeeViewModel(coffeeFromService[i]);
            this._allCoffees.push(newCoffee);
        }
       
    }

    private onDataLoading() {
        this.set('isLoading', false);  
        this.filter();      
    }

    private filter(){
        this._coffees = this._allCoffees;
        this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: "coffees", value: this._coffees});
        
    }

    public editCoffee(id: number, cost: number, name: string, notes: string, region: string, acidity: string, elevation: string, processing: string,varietal: string,body: string){

        this._coffeeService.editCoffee(id, cost, name, notes, region, acidity, elevation, processing,varietal, body);
        this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: "coffees", value: this._coffees});

    }

    // get IfDecaf(): boolean{

    // }
    // set IfDecaf(v: boolean){
    //     this.
    // }
}