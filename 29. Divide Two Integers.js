/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    let ans;
    if(divisor===-1){
        ans=-1*dividend;
    }else{
        ans = dividend/divisor;
    }
    return Math.trunc(ans)
};