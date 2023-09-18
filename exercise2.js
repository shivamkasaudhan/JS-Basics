var age = 10;
if(age>=65){
    console.log("You get your income from your pension.")
}else if(age<65 && age>=18){
    console.log("Each month you get a salary.")
}else if(age<18){
    console.log("You get an allowance.")
}else{
    console.log("The value of the age variable is not numerical.")
}
var day = "sunday";
switch(day){
    case "sunday":
    console.log("Do something")
    break;
    case "monday":
    console.log("Do something")
    break;
    case "tuesday":
    console.log("Do something")
    break;
    case "wednesday":
    console.log("Do something")
    break;
    case "thursday":
    console.log("Do something")
    break;
    case "friday":
    console.log("Do something")
    break;
    case "saturday":
    console.log("Do something")
    break;
    default:
    console.log("There is no such day")
}