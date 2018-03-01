export class Hamburger {
    constructor(
        private _name:string, 
        private prix:number
    ){

    }

    get name(){
        return this._name;
    }

    /*getName(){
        return this.name;
    }*/
}