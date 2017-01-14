import { Observable, EventData } from 'data/observable';
import { Coffee } from '../../shared/interfaces';
import { CoffeeService } from '../../services/coffee-service';
import imageSourceModule = require("image-source");
import cameraModule = require("camera");

export class AddCoffeeViewModel extends Observable {
    private _coffeeService: CoffeeService; 
    private _coffeeType : number;
    private _selectedIndex : number;
    private _Decaf : boolean;
    private _picture : imageSourceModule.ImageSource;
    
    
    constructor() {
        super()
        this._coffeeService = new CoffeeService();
        this.set("Decaf", false);
    }
    

    public addCoffee(cost: number, name: string, notes: string, region: string, acidity: string, elevation: string, processing: string,varietal: string,body: string) {
          

        this._coffeeService.postCoffee(this.selectedIndex, cost, name, notes, region, acidity, elevation, processing,varietal, body, this._Decaf);     
    }

    public get coffeeType() : number {
        return this._coffeeType;
    }

    public set coffeeType(v : number) {
        this._coffeeType = v;
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
    

    public deleteCoffee(_id: number){
        this._coffeeService.deleteCoffee(_id);
        this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: "coffeeSelection"})
    }
    
    public get Decaf() : boolean {
        return this._Decaf;
    }
    public set Decaf(v : boolean) {
        this._Decaf = v;
    }
    
    get picture() : imageSourceModule.ImageSource {
        return this._picture;
    }
    set picture(value : imageSourceModule.ImageSource) {
          if (this._picture != value) {
            this._picture = value;
            this.notifyPropertyChange("picture", value);
        }
    }

    takePicture() {
        var options: cameraModule.CameraOptions = {
            width: 320,
            height: 480,
            keepAspectRatio: true
        };
        cameraModule.takePicture(options).then(picture => {
            this.picture = picture;
        });
    }
}