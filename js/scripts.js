// back end

function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.cost = function() {
  return this.pizzaSize + this.pizzaToppings;
}




// front end


$(document).ready(function() {
  $("form#pizza-choices").submit(function(event) {
    event.preventDefault();
    $("#display-cost").empty();
    var sizeCharge = parseInt($("input:radio[name=pizza-size]:checked").val());
    var newPizza = new Pizza(sizeCharge, 0);


    $("#display-cost").append("<h3>Amount Due: $" + newPizza.cost() + "</h3>");
  });
});
