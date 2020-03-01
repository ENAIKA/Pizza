

//Constructor
function Order(number,size,crust,topping){
    this.number=number;
    this.size=[];
    this.crust=[];
    this.topping=[];
}
//size objects

var size={small:250, medium:350, large:450}

//crust objects

var crust={butter:100, garlicButter:150, canjumButter:200, parmesan:100, sesameSeed:150, everything:250}

//topping objects
var topping={chicken:100, bacon:150, bbq:200, tomatoes:250,onions:50,olives:300, meatballs:100, pineapple:150, mushroom:300, cheese:100}
