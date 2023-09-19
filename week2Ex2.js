function addTwoNum(a, b){
    try{
        if(typeof(a)!="number"){
            throw new ReferenceError("the first argument is not a number")
        }else if(typeof(b)!="number"){
            throw new ReferenceError("the first argument is not b number")
        }else{
            console.log(a+b)
        }
    }catch(err){
        console.log("Error!",err)
    }
}
addTwoNum(5,"5")
console.log( "It still works")
