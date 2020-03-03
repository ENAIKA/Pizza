//Constructor
function Order(number, size, crust, topping){
    this.number=number;
    this.size=size;
    this.crust=crust;
    this.topping=topping;
}
//size object

var sizes={small:250, medium:350, large:450}

//crust object

var crusts={butter:100, garlicButter:150, canjumButter:200, parmesan:100, sesameSeed:150, everything:250}

//topping object
var topping={chicken:100, bacon:150, bbq:200, tomatoes:250,onions:50,olives:300, meatballs:100, pineapple:150, mushroom:300, cheese:100}

//function to get values from multiple selection #topping
function getMultiple() {
    var selectElement = document.getElementById("topping");
    var selectedElements = [];
    for (var i = 0; i < selectElement.length; i++) {
        if (selectElement.options[i].selected) selectedElements.push(selectElement.options[i].value);
    }
   return selectedElements;
}
//declare variables
var getValues=getMultiple();
//an array of prices from get value
function getPrices(price) {
   return price.map(function (item, index) {
        return topping[getValues[index]];

    })
}
var prices=getPrices(getValues)
//reduce the array
function reducePrices(){
    var reducer=(acc, currentValue)=> acc+currentValue;
   return prices.reduce(reducer);
}

var selectedTopping=reducePrices();//should be halved maybe to get reasonable prices

var inputtedNumber=parseInt($("input#num").val());
var selectedSize=$("select#size option:selected").val();
var selectedCrust=$("select#crust option:selected").val();
var newOrder= new Order(inputtedNumber, sizes[selectedSize], crusts[selectedCrust], selectedTopping);

//method
Order.prototype.fullorder=function(){
    var fullorder=(this.size +this.crust+this.topping)*this.number; 
    return fullorder;
}
