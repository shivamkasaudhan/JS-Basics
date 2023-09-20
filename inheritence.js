var bird = {
    hasWings : true,
    canFly : true,
    hasFeather : true
}

var eagle1 = Object.create(bird);
console.log("eagle1 :",eagle1);

console.log("eagle1 has wings: ", eagle1.hasWings);
console.log("eagle1 can fly: ", eagle1.canFly);
console.log("eagle1 has feathure: ", eagle1.hasFeather);
var eagle2 = Object.create(bird);
console.log("eagle1 has wings: ", eagle1.hasWings);
console.log("eagle1 can fly: ", eagle1.canFly);
console.log("eagle1 has feathure: ", eagle1.hasFeather);

var penguin1 = Object.create(bird);
penguin1.canFly= false;
console.log(penguin1)
console.log("penguin1 has wings: ", penguin1.hasWings);
console.log("penguin1 can fly: ", penguin1.canFly);
console.log("penguin1 has feathure: ", penguin1.hasFeather);
