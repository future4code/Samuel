import { LinkedList, LinkedListNode } from "./ex1";

/**
 * Faça a implementação de uma Fila em Typescript e utilizando
 * uma Lista Ligada como estrutura de base (assim como fizemos em aula).
 * Implemente os métodos:
 * `isEmpty`: que indica se ela está vazia
 * `enqueue`: que adiciona um elemento à fila
 * `dequeue`: que retira um elemento da fila
 * `print`: que imprima todos os elementos da fila
 */

export class Queue {
    public nodes: LinkedList = new LinkedList();
    // considera-se o gabarito do item A para essa Lista Ligada!

    isEmpty(): boolean {
        return this.nodes.start === undefined;
    }

    enqueue(value: number): void {
        this.nodes.appendToTail(value);
    }

    dequeue(): LinkedListNode | undefined {
        if (this.nodes.start) {
            const nodeToDequeue = this.nodes.start;
            this.nodes.start = this.nodes.start.getNext();
            return nodeToDequeue
        }
    }

    print(): void {
        this.nodes.print();
    }
}
