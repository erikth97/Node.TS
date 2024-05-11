import { describe } from "node:test";
import { characters } from "../../src/js-fundation/02-destructuring";

describe('js-fundation/02-destructuring', () => {

    test('characteres should contain Flash, Superman', () => {

        expect( characters ).toContain('Flash');
        expect( characters ).toContain('Superman');

    });


    test('first character should be flash, and second Superman', () => {

        const [ flash, superman] = characters;

        expect( flash ).toBe('Flash');
        expect( superman ).toBe('Superman');

    });

});