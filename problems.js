// Reverse the array
function reverse(arr){

    /* Write your code here
   No need to specify return type 
   Input and output already taken care of */

   // You don't need to return anything or keep any new array , just reverse the array in-place
   var n = arr.length - 1;
   for (var i = n; i >= 0; i--){
       console.log(arr[i]);
   }

}



process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
input_stdin += data;
});

process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();    
});

function readLine() {
return input_stdin_array[input_currentline++];
}


function main() {
   
let n = parseInt(readLine());
const arr = readLine().replace(/\s+$/g, '').split(' ');

let array = [];

for(let i = 0 ; i<n ; i++){
   array.push((Number)(arr[i]));
}

let res = reverse(array);
console.log(...array);

}