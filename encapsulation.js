let baseSalery=30000;
let overtime=10;
let rate =20;
//normal function
function getWage(baseSalery,overtime,rate){
    return baseSalery + (overtime*rate);
}
//encapsulation
//the best functions are those with no parameters.
let employee={
    baseSalery: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalery+ (this.overtime * this.rate);
    }
};
employee.getWage();
console.log(employee.getWage());