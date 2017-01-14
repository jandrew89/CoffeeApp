import { Observable, EventData } from 'data/observable';
import { Coffee } from '../../shared/interfaces';
import { CoffeeService } from '../../services/coffee-service';

export class EditCoffeeViewModel extends Observable {
    private _coffeeService: CoffeeService; 

    constructor(coffee: Coffee) {
        super()
        this._coffee = coffee;
        this._coffeeService = new CoffeeService();
    }

    private _coffee: Coffee;

    public editCoffee(id: number, cost: number, name: string, notes: string, region: string, acidity: string, elevation: string, processing: string,varietal: string,body: string){

        this._coffeeService.editCoffee(id, cost, name, notes, region, acidity, elevation, processing,varietal, body);

    }

    
}