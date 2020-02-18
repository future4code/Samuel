import { verifyOneEdit } from "../src/ex2"

describe("Testing ", () => {

    //deveria retornar 'false' para as palavras 'banana' e 'bananaaa'
    it("Shoud return 'false' for input 'banana, bananaaa'", () => {
        const result = verifyOneEdit("banana", "bananaaa");
        expect(result).toEqual(false);
    })

    //deveria retornar 'true' para as palavras 'banana' e 'banane'
    it("Shoud return 'true' for input 'banana, banane'", () => {
        const result = verifyOneEdit("banana", "banane");
        expect(result).toEqual(true);
    })

    //deveria retornar 'false' para as palavras 'banana' e 'balani'
    it("Shoud return 'false' for input 'banana, balani'", () => {
        const result = verifyOneEdit("banana", "balani");
        expect(result).toEqual(false);
    })
});