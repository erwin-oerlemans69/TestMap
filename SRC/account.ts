export class Account {

    //Korte aantekening van E Jansen om het committen en pushen te oefenen

  _type: string;
  _balance: number;
  _savings: number;

    constructor(initial:string) {
        this._type = initial
        this._balance = 0;
        this._savings = 0;
    } 

    get type() {
    return this._type;
    }

    get balance() {
    return this._balance;
    }

    get savings() {
    return this._savings;
    }

    public withdraw( amount: number ) {
        if ( amount <= 0 ) {
            throw new Error ("Please supply a positive, non-zero amount")
        }
        if ( this._type == 'savings' && amount > this._balance) {
            throw new Error ("Savings mogen niet negatief worden")
        }
        else {
        this._balance -= amount
        }
    };

    public deposit( amount: number) {
        if ( amount <= 0 ) {
            throw new Error ("Please, aub aub, supply a positive, non-zero amount")
        }
        else {
        this._balance += amount
        }
    };
}
