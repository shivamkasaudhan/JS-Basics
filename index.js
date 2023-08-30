console.log('shivam');
let name='Shivam'; //string literal
// const intrestRate=0.3;
intrestRate=1; //we cnt reassign the constant value
console.log(intrestRate);
let age=20; //number literal
let isApproved=false;  // boolean literal
let selectColor= null;
let firstName=undefined;

let person= {
    name: 'shivam',
    age:'20'
};
//dot notation
person.name='satyam';
//bracket Notation
person['age']= '25';
console.log(person.name);
console.log(person);

//array
let selectedColors = ['red','blue']; //array literal
selectedColors[2]='green';
selectedColors[3]=1;
console.log(selectedColors);
console.log('size: '+selectedColors.length);
//functions
//perfoming a task
function greet(name, firstName) {
    console.log('hello '+ name + ' ' + firstName);
}
//colcilating value
function square(number) {
    return number*number;
}
console.log('square of 20: ' + square(20));
greet('Shivam','kasaudhan');
greet('Satyam','kasaudhan');