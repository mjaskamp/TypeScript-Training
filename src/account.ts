export class Account {
    private _type: string;
    private _balance: number;

    constructor(type: string) {
       this._type = type;
       this._balance = 0;
    }

    get type(): string {
        return this._type;
    }

    get balance(): number {
        return this._balance;
    }

    withdraw(sumWithdraw: number): void {
        if (sumWithdraw <= 0) {
            throw new Error(`Please supply a positive, non-zero ammount`);
        } 

        if (this._type == "savings" && sumWithdraw > this._balance) {
            throw new Error('You have no money')
        }

        this._balance = this._balance - sumWithdraw 
    }

    deposit(sumDeposit: number): void {
        if (sumDeposit <= 0) {
            throw new Error(`Please supply a positive, non-zero ammount`);
        } 
        this._balance = this._balance + sumDeposit
            }
}