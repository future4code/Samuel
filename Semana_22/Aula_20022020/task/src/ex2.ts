/**
 * Faça a implementação de uma Pilha em Typescript e 
 * utilizando um Array como estrutura de base (assim como fizemos em aula).
 * Implemente os métodos:
 * `isEmpty`: que indica se ela está vazia
 * `push`: que adiciona um elemento à pilha
 * `pop`: que retira um elemento da pilha
 * `print`: que imprima todos os elementos da pilha
 */

export class Stack {
    public nodes: (number | undefined)[] = [];

    isEmpty(): boolean {
        return this.nodes.length === 0;
    }

    push(value: number): void {
        this.nodes.push(value);
    }

    pop(): number | undefined {
        const nodeToPop = this.nodes[this.nodes.length - 1];
        this.nodes[this.nodes.length - 1] = undefined;
        this.nodes.length = this.nodes.length - 1;
        return nodeToPop;
    }

    print(): void {
        for (let i = 0; i < this.nodes.length; i++) {
            console.log(`Elemento ${i + 1}: `, this.nodes[i]);
        }
    }
}