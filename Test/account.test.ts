import { describe, expect, test } from 'vitest';
import { Account } from '../SRC/account';

// gebruik describe om tests te groeperen: nb: let op ')' sluithaakje, hier na 'wat tests'. Deze moet helemaal aan het eind van de tests worden
//toegevoegd. 
describe('wat tests', () => {
test('Deposit', () :void => {
    let account : Account = new Account('checking');

    account.deposit(10);

    expect(account._balance).toEqual(10);
});

test('NewSavings', () :void => {
    let account : Account = new Account('NewSave');

    account.deposit(10);
    account.withdraw(5);

    expect(account._balance).toEqual(5);
});

//tes
test('Kijken of ie fout loopt bij toevoeg minwaarde', () => {
    let account = new Account('CheckingMinWaarde');

    //Let op: de in te voeren minwaarde moet in onderstaande regel komen!!! Had 'm eerst apart gezet. 

    expect(() => account.deposit(-10)).toThrowError('Please, aub aub, supply a positive, non-zero amount');

})

});