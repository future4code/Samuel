/**
 * Considere que a gente só possa fazer três operações com string: 
 * adicionar um caractere a ele, remover um caractere dele ou 
 * substituir um caractere por outro. Dizemos que uma string é 'one edit'
 * de outra se ela for o resultado da original a partir de UMA SÓ
 * dessas operações. Escreva um método que determine se uma string é
 * 'one edit' de outra.
 * "banan" é 'one edit' de "banana" (remoção de 1 caracter)
 * "bananak" é 'one edit' de "banana" (adição de 1 caracter)
 * "panana" é 'one edit' de "banana" (substituição de 1 caracter)
 * "bananaaa" **NÃO** é 'one edit' de "banana" (add 2 caracteres)
 */


export const verifyOneEdit = (originString: string, stringToCompare: string): boolean => {

    if(stringToCompare.length < originString.length -1 || 
        stringToCompare.length > originString.length + 1){
            return false
    }

    let modifications: number = 0;
    for(let i = 0; i < stringToCompare.length; i++){
        if(originString.charAt(i) !== stringToCompare.charAt(i)){
            modifications++
        }
    }
    console.log("Modificações:", modifications)
    return modifications <= 1;
}