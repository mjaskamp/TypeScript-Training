export class Calculator {

    private _total: number;

    constructor() {
        this._total = 0;
    }

    get total() {
        return this._total;
    }
}