//Constructor
function Order(number, size, crust, topping){
    this.number=number;
    this.size=size;
    this.crust=crust;
    this.topping=topping;
}
Order.prototype.fullorder=function(){
    var fullorder=((this.size +this.crust+this.topping)*this.number); 
    return fullorder;
}
//size object

var sizes={small:250, medium:350, large:450};

//crust object

var crusts={butter:100, garlicButter:150, canjumButter:200, parmesan:100, sesameSeed:150, everything:250};

//topping object
var toppings={chicken:100, bacon:150, bbq:200, tomatoes:250,onions:50,olives:300, meatballs:100, pineapple:150, mushroom:300, cheese:100};

//function to get values from multiple selection #topping

// function getMultiple() {
//     var selectElement = document.getElementById("topping");
//     var selectedElements = [];
//     for (var i = 0; i < selectElement.length; i++) {
//         if (selectElement.options[i].selected) selectedElements.push(selectElement.options[i].value);
//     }
//    return selectedElements;
// }
//declare variables

//an array of prices from getValue()
function getPrices(price) {
   return price.map(function (item) {
        return toppings[item];

    });
}

//reduce the array
function reducePrices(){
    var reducer=(acc, currentValue)=> acc+currentValue;
   return prices.reduce(reducer);
}
$(document).ready(function () {
    $("#btnOrder").click(function () {
        event.preventDefault();
        prices=getPrices($("select#topping").val());
        priced=$("select#topping").val();
        var selectedTopping = reducePrices();//should be halved maybe to get reasonable prices

        var inputtedNumber = parseInt($("input#num").val());
        var selectedSize = $("select#size option:selected").val();
        var selectedCrust = $("select#crust option:selected").val();
        var newOrder = new Order(inputtedNumber, sizes[selectedSize], crusts[selectedCrust], selectedTopping);

        // $("ul#getMyOrder").append("<li> <span class='getMyOrder'>" + inputtedNumber +" " +selectedSize +"-"+"sized" +" "+ selectedCrust +" "+"crust" +" "+ "with"+" "+priced + " "+"topping pizza"+ " " +newOrder.fullorder()+"</span></li>");
        var tabledata = "<tr><td>"+ inputtedNumber +"</td><td>" +selectedSize+"</td><td>" + selectedCrust + "</td><td>" + priced + "</td><td>" + newOrder.fullorder() + "</td></tr>";
        $('tbody').append(tabledata);
        var tabletotal = "<tr><td colspan = '4'>" + + "</td><td>" +  + "</td><tr>"
        $("tfoot").append()
        
    });
    $(".medium").hover(function(){
        $("#medium").fadeToggle();},
        function(){
        $("#medium").fadeToggle(1000);
      });
      $(".large").hover(function(){
        $("#large").fadeToggle();},
        function(){
        $("#large").fadeToggle(1000);
      });
      $(".small").hover(function(){
        $("#small").fadeToggle();},
        function(){
        $("#small").fadeToggle(1000);
      });
      
});

//method
//method to get whole billing
// Order.prototype.totalOrder=function(){
//     var array1=[];
//     for (item in )
// }