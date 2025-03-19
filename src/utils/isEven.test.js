import { aboutCats } from './isEven.js';

describe('aboutCats: tells you if you should get a cat or not', () => {
    it('yes, yes, yes', () => {
        const actual = aboutCats(true, true, true);
        expect(actual).toEqual('replace your cat with a stuffed animal');
    });
    it('yes, yes, no', () => {
        const actual = aboutCats(true, true, false);
        expect(actual).toEqual('make a friend who has a cat');
    });
    it('yes, no, yes', () => {
        const actual = aboutCats(true, false, true);
        expect(actual).toEqual('you are doing great');
    });
    it('yes, no, no', () => {
        const actual = aboutCats(true, false, false);
        expect(actual).toEqual('get a cat');
    });
    it('no, yes, yes', () => {
        const actual = aboutCats(false, true, true);
        expect(actual).toEqual('rethink your life choices');
    });
    it('no, yes, no', () => {
        const actual = aboutCats(false, true, false);
        expect(actual).toEqual('you are doing great');
    });
    it('no, no, yes', () => {
        const actual = aboutCats(false, false, true);
        expect(actual).toEqual('you could be doing worse');
    });
    it('no, no, no', () => {
        const actual = aboutCats(false, false, false);
        expect(actual).toEqual('');
    });
});
