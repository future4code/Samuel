/**
 * Escreva uma função que receba uma string 
 * e devolva o primeiro número recorrente nela
 * Exemplos:
 * Para o input 'ABCA o resultado deve ser 'A'
 * Para o input 'BCABA' o resultado deve ser 'B'
 * Para o input 'ABC' o resultado deve ser 'null'
 */


export const findFirstRepeatingChar = (input: string): string | null => {
    input = input.toUpperCase();
    let uniqueChars = [];

    for (let i = 0; i < input.length; i++) {
        if (uniqueChars.indexOf(input[i]) !== -1) {
            return input[i];
        }
        else {
            uniqueChars.push(input[i]);
        }
    }
    return null;
}