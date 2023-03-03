/** You call a pre-defined API int guess(int num), which returns three possible results:
 * -1: Your guess is higher than the number I picked (i.e. num > pick).
 * 1: Your guess is lower than the number I picked (i.e. num < pick).
 * 0: your guess is equal to the number I picked (i.e. num == pick).
 * Return the number that I picked.
 */

var guessNumber = function(n) {
    let numero = Math.floor(Math.random() * 10) + 1
    
    if(n > numero){
        return -1
    }else if(n < numero){
        return 1
    }else{
        return 0
    }
 }

 module.exports = guessNumber;
