import { findFirstRepeatingChar } from "../src/ex1"

describe("Testing findFirstRepeatingChar", () => {

    //deveria retornar 'A' para a palavra 'ABCA'
    it("Shoud return 'A' for input 'ABCA'", () => {
        const result = findFirstRepeatingChar("ABCA");
        expect(result).toBe("A");
    })

    //deveria retornar 'B' para a palavra 'BCABA'
    it("Shoud return 'B' for input 'BCABA'", () => {
        const result = findFirstRepeatingChar("BCABA");
        expect(result).toBe("B");
    })

    
    //deveria retornar 'V' para a palavra 'avivar'
    it("Shoud return 'V' for input 'avivar'", () => {
        const result = findFirstRepeatingChar("avivar");
        expect(result).toBe("V");
    })
    

    //deveria retornar 'S' para a palavra 'VISCONDES'
    it("Shoud return 'S' for input 'VISCONDES'", () => {
        const result = findFirstRepeatingChar("VISCONDES");
        expect(result).toBe("S");
    })

    //deveria retornar 'null' para a palavra 'ABC'
    it("Shoud return 'null' for input 'ABC'", () => {
        const result = findFirstRepeatingChar("ABC");
        expect(result).toBe(null);
    })
})
