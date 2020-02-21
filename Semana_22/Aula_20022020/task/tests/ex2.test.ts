import { Stack } from "../src/ex2";

describe("Testing stack", () => {

    //deveria retornar 'true' para uma pilha vazia
    it("Should return 'true' for an empty stack'", () => {
        const newStack = new Stack();
        const result = newStack.isEmpty();
        expect(result).toEqual(true);
    })

    //deve inserir os valores 1, 3 e 5 na pilha
    it("Should insert values 1, 3 and 5 into the stack, then delete them", () => {
        const newStack = new Stack();
        newStack.push(1)
        newStack.push(3)
        newStack.push(5)
        const terceiro = newStack.pop()
        const segundo = newStack.pop()
        const primeiro = newStack.pop()
        expect(terceiro).toBe(5);
        expect(segundo).toBe(3);
        expect(primeiro).toBe(1);
    })
});
