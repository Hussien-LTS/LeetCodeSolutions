/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let num = 0 
    for (let i = 0 ; i <s.length; i++){
        if (s[i] == letter){
            num += 1
        }
    }
    return Math.floor((num / s.length)* 100)
};