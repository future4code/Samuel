import { LinkedList, LinkedListNode } from "../src/ex1";

describe("Testing linked list", () => {

    //deve criar uma lista ligada com um único elemento de valor
    //inicial '1'
    it("Should print a linked list with one element '1'", () => {
        const newNode = new LinkedListNode(1)
        const newList = new LinkedList(newNode)
        const mockCallback = jest.fn(newList.print)
        expect(mockCallback).toHaveBeenCalledTimes(1)
    })
})
