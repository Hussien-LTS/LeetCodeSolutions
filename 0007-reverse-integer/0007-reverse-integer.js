/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const limit = 2147483648;
    const neg = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
   return n > limit ? 0 : n * neg;
};