import {gasCalculator} from './calculator';

describe('calc', () => {
    it('should bla', () =>  {
        const ergebnis = gasCalculator(5, 1);
        expect(ergebnis).toBe(5);
    });
});
