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
        } else {
        this._balance = this._balance - sumWithdraw
        }

        if (this._type == "savings" && this._balance == 0) {
            throw new Error('You have no money')
        } else {
        this._balance = this._balance - sumWithdraw
        }
    }

    deposit(sumDeposit: number): void {
        if (sumDeposit <= 0) {
            throw new Error(`Please supply a positive, non-zero ammount`);
        } else {
        this._balance = this._balance + sumDeposit
        }
    }

    
}