// First index of element
function first_index(arr ,  ele){

    /* Write your code here
   No need to specify return type 
   Input and output already taken care of, you have to just return the output variable */
   for (var i = 0; i < arr.length; i++){
       if (arr[i] == ele) {
           return i;
       }
   }
   return -1;
}

// Sum Of Even Numbers Till N
function sum(n){
        
    /* Write your code here
  No need to specify return type 
  Input and output already taken care of, you have to just return the output variable */
var sum = 0;
for (var i = 2; i <= n; i += 2){
  sum += i;
}
return sum;
}

// Fahrenheit to Celsius
function Fahrenheit_to_Celsius(start , end , step){
		
    /* Write your code here
   No need to specify return type 
   Input is already taken care of, you have to print the output statements accordingly */
   for (var i = start; i <= end; i += step){
       var c = (i - 32) / 1.8;
       console.log(i+ " " + Math.trunc(c));
   }
}

//Sum of even & odd
function even_odd_sum(num){
		
    /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output array */

    //Return an array of evensum & oddsum like {evensum , oddsum};
    var evenSum = 0;
    var oddSum = 0;
    while (num > 0) {
        var digit = num % 10;
        if (digit % 2 == 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
        num = Math.floor(num/10);
    }
    return [evenSum, oddSum];

}

// Factorial of a Number
function fact(n){
	
    /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output variable */
    var ans = 1;
    for (var i = 2; i <= n; i++){
        ans = ans * i;
    }
    return (ans);
}