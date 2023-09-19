try {
    console.log(a+b);
} catch(err){
    console.log(err)
    console.log("There was an error.")
    console.log("The error was saved by error log.")
}
console.log("running")
try{
    throw new ReferenceError();
}catch(err){
    console.log(err)
    console.log("There was an error.")

}
console.log("running")