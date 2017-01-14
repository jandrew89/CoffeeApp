import { BaseViewModel } from './base-view-model';
import { SignOff } from '../../shared/interfaces';
import { Observable } from 'data/observable';

export class SignOffBaseViewModel extends BaseViewModel implements SignOff{
        private _SignOff : boolean;
        private _CoffeeId : number;
        private _Comments : string;
        private _Recommend : boolean;

    constructor(){

        super();
        
    }

    
    public get SignOff() : boolean {
        return this._SignOff;
    }

    public set SignOff(v : boolean) {
        this._SignOff = v;
    }
    

    public get CoffeeId() : number {
         return this._CoffeeId;

     }
     public set CoffeeId(v : number) {
        this._CoffeeId = v;
    }

    
    public get Comments() : string {
        return this._Comments;
    }
    public set Comments(v : string) {
        this._Comments = v;
    }
    
    
    public get Recommend() : boolean {
        return this._Recommend;
    }
    public set Recommend(v : boolean) {
        this._Recommend = v;
    }
    


    public addSignOff(comments: string){
        
        this.set("Comments", comments);
        this.get("SignOff");
        this.get("Recommend");

        
        //this._coffeeService.postSignOff(this.Id, this.SignOff, comments, this.Recommend);
    }
    
}