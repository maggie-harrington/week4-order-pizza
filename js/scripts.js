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

function Order(total) {
  this.total = total;
}

Order.prototype.totalCost = function() {
  var orderTotal = 0;
  for (var j = 0; j < this.total.length; j++) {
    orderTotal += this.total[j];
  }
  return orderTotal;
}


// front end

$(document).ready(function() {
  var pizzaNumbers = [1];
  var pizzaNumber = 1;
  
  $("#add-pizza").click(function() {
    $("#display-cost").empty();
    pizzaNumber ++;
    pizzaNumbers.push(pizzaNumber);
    if (pizzaNumber === 2) {
      $("#appendNumber").append('<h2>Pizza ' + (pizzaNumber - 1) + '</h2>');
    }

    $("#new-pizzas").append('<div class="new-pizza col-md-4" id="pizza' + pizzaNumber + '">' +
                              '<div class="radio" id="select-size">' +
                                '<h2>Pizza ' + pizzaNumber + '</h2>' +
                                '<h3>Select pizza size:</h3>' +
                                '<label>' +
                                  '<input type="radio" name="pizza-size' + pizzaNumber + '" value="20" checked>' +
                                  'large (20)' +
                                '</label>' +
                                '<br>' +
                                '<label>' +
                                  '<input type="radio" name="pizza-size' + pizzaNumber + '" value="17">' +
                                  'medium (17)' +
                                '</label>' +
                                '<br>' +
                                '<label>' +
                                  '<input type="radio" name="pizza-size' + pizzaNumber + '" value="14">' +
                                  'small (14)' +
                                '</label>' +
                                '<br>' +
                              '</div>' +

                              '<div class="form-group" id="select-toppings' + pizzaNumber + '">' +
                                '<h3>Select toppings:</h3>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="1"> mushrooms (1)<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="1"> olives (1)<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="2"> pineapple (2)<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="2"> artichokes (2)<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="3"> feta cheese (3)<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="3"> sundried tomatoes (3)<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="2"> pepperoni (2)<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="2"> canadian bacon (2)<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="2"> sausage (2)<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="3"> anchovies (3)<br>' +
                              '</div>' +
                            '</div>');
  });

  $("form#pizza-choices").submit(function(event) {
    event.preventDefault();
    $("#display-cost").empty();
    var orderCost = [];

    $(".new-pizza").each(function() {
      var pizzaSize = parseInt($(this).find("input:radio:checked").val());
      var selectedToppings = [];
      $(this).find("input:checkbox:checked").each(function() {
        var checkedToppings = parseInt($(this).val());
        selectedToppings.push(checkedToppings);
      });
      var newPizza = new Pizza(pizzaSize, selectedToppings);
      orderCost.push(newPizza.cost());
    });

    var newOrder = new Order(orderCost);

    for (var k = 0; k < orderCost.length; k ++) {
    $("#display-cost").append("<h4>Pizza " + (k + 1) + ": $" + orderCost[k] + "</h4>");
    }

    $("#display-cost").append("<h3>Total due: $" + newOrder.totalCost() + "</h3>");
  });
});
