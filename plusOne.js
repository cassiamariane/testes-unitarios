/** 
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
*/
var plusOne = function(digits) {
    
    let lista = ''
    for(let i = 0; i < digits.length; i++){
        lista += digits[i]
    }

    lista = BigInt(lista) + BigInt(1)
    lista = lista.toString().split("")

    for(let i = 0; i < lista.length; i++){
        lista[i] = BigInt(lista[i])
    }
    
    return lista
};

module.exports = plusOne;
