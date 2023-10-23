// 2520
/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    var n = 0;
    var temp = Math.abs(num);
    while(temp>0){
        var lastDigit = temp%10;

        if(lastDigit!==0 && num%lastDigit===0){
            n++;
        }
        temp= Math.floor(temp/10);

    }
    return n;
};