/**
 * Faça a implementação de uma Lista Ligada em Typescript. 
 * Implemente o método que adiciona um elemento ao final da 
 * lista e um método que imprima todos elementos presentes nela.
 */

export class LinkedList {
    public start?: LinkedListNode;
    constructor(start?: LinkedListNode) {
        this.start = start;
    }

    public appendToTail(value: number) {
        if (!this.start) {
            this.start = new LinkedListNode(value);
        } else {
            let node: LinkedListNode = this.start;
            while (node && node.getNext() !== undefined) {
                node = node.getNext()!;
            }
            node.setNext(new LinkedListNode(value));
        }
    }

    public print(): void {
        let node: LinkedListNode | undefined = this.start;
        let i = 1;
        while (node !== undefined) {
            console.log(`Elemento ${i}: `, node!.getData());
            node = node!.getNext();
            i++;
        }
    }
}

export class LinkedListNode {
    private value: number;
    private next: LinkedListNode | undefined;

    constructor(value: number, next?: LinkedListNode) {
        this.value = value;
        this.next = next || undefined;
    }

    public setValue(value: number): void {
        this.value = value;
    }
    public getData() {
        return this.value;
    }
    public setNext(next: LinkedListNode): void {
        this.next = next;
    }
    public getNext() {
        return this.next;
    }
}