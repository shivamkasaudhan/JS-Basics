// const circle= {
//     rsdius: 1,
//     location: {
//         x: 1,
//         t: 1
//     },
//     draw: function() {
//         console.log('draw');
//     } 
// };
//factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle= createCircle(1); 

//Constructor function
function Circle(radius) {
    this.radius= radius;
    this.draw= function() {
        console.log('draw');
    }
}
const another= new Circle(1);

