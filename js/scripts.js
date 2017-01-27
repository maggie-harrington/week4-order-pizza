// back end

function Pizza(size, toppings) {
  this.sizeCharge = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.cost = function() {
  var toppingsCharge = 0;
  for (var i = 0; i < this.pizzaToppings.length; i++) {
    toppingsCharge += this.pizzaToppings[i];
  }
  return this.sizeCharge + toppingsCharge;
}




// front end

$(document).ready(function() {
  $("form#pizza-choices").submit(function(event) {
    event.preventDefault();
    $("#display-cost").empty();
    
    var pizzaSize = parseInt($("input:radio[name=pizza-size]:checked").val());

    var selectedToppings = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      var checkedToppings = parseInt($(this).val());
      selectedToppings.push(checkedToppings);
    });

    var newPizza = new Pizza(pizzaSize, selectedToppings);

    $("#display-cost").append("<h3>Amount due: $" + newPizza.cost() + "</h3>");
  });
});
