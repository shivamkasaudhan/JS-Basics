var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

const car = {
    engine : true,
    speed : "slow",
    steering: true

}
const superCar = Object.create(car);
superCar.speed = "fast";

console.log("Objects in Supercar: ", superCar);

//for in loop
for(prop in superCar){
    console.log(prop, superCar[prop]);
}

//for of loop
console.log("printing this....");
for(key of Object.keys(superCar)){
    console.log(key + " : " + superCar[key]);
}