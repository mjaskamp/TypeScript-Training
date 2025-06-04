import { describe, expect, test } from 'vitest';
import { Account } from '../src/account';

describe('Account tests', () => {
test('deposit', () :void => {

    let account :Account = new Account ('checking');

    account.deposit(10);

    expect(account.balance).toEqual(10);
})

test('new savings account', () :void => {

    let account :Account = new Account ('checking');
    
    account.deposit(10);
    account.withdraw(5);

    expect(account.balance).toEqual(5);
    
})
test('create new account and deposit a negative amount', () => {

    let account :Account = new Account('checking');

    expect(() => account.deposit(-1)).toThrowError('Please supply a positive, non-zero amount');

})

})