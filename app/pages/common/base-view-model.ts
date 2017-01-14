import { Observable } from 'data/observable';
import { Coffee } from '../../shared/interfaces';
import { CoffeeService } from '../../services/coffee-service';


export class BaseViewModel extends Observable implements Coffee {
    public _coffee: Coffee;
    public _coffeeService: CoffeeService;
    

    constructor(source?: Coffee){
        super();
        this._coffeeService = new CoffeeService();     
        this._coffee = source;
        
    }

    get Id(): number {
        return this._coffee.Id;
    }

    get CoffeeType(): number {
        return this._coffee.CoffeeType;   
    }

    get Cost(): number {
        return this._coffee.Cost;
    }

    get Name(): string {
        return this._coffee.Name;
    }

    get Notes(): string {
        return this._coffee.Notes;
    }

    get Region(): string {
        return this._coffee.Region;
    }

    get Acidity(): string {
        return this._coffee.Acidity;
    }

    get Body(): string {
        return this._coffee.Body;
    }

    get Elevation(): string {
        return this._coffee.Elevation;
    }

    get Processing(): string {
        return this._coffee.Processing;
    }

    get Varietal(): string {
        return this._coffee.Varietal;
    }

    get Decaf(): boolean {
        return this._coffee.Decaf;
    }

    get SignOff(): boolean {
        return this._coffee.SignOff;
    }
    
    
}