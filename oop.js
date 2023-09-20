var price1= {
    shoesPrice : 100,
    tax : 1.2,
    totalPrice : function(){
        var total = price1.shoesPrice*price1.tax;
        console.log(total)
    }

}
price1.totalPrice();
var price2 = {
    shoesPrice : 120,
    tax : 1.5,
    totalPrice : function(){
        var total = this.shoesPrice*this.tax
        console.log(total)
    }
}
price2.totalPrice()
console.log(new Date())