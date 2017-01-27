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
  var pizzaNumber = 1;
  $("#add-pizza").click(function() {
    $("#display-cost").empty();
    pizzaNumber ++;
    $("#new-pizzas").append('<div class="new-pizza" id="pizza' + pizzaNumber + '">' +
                              '<div class="radio" id="select-size">' +
                                '<h2>Select pizza size:</h2>' +
                                '<label>' +
                                  '<input type="radio" name="pizza-size' + pizzaNumber + '" value="20" checked>' +
                                  'large' +
                                '</label>' +
                                '<br>' +
                                '<label>' +
                                  '<input type="radio" name="pizza-size' + pizzaNumber + '" value="17">' +
                                  'medium' +
                                '</label>' +
                                '<br>' +
                                '<label>' +
                                  '<input type="radio" name="pizza-size' + pizzaNumber + '" value="14">' +
                                  'small' +
                                '</label>' +
                                '<br>' +
                              '</div>' +

                              '<div class="form-group" id="select-toppings' + pizzaNumber + '">' +
                                '<h2>Select toppings:</h2>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="1"> mushrooms<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="1"> olives<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="2"> pineapple<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="2"> artichokes<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="3"> feta cheese<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="3"> sundried tomatoes<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="2"> pepperoni<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="2"> canadian bacon<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="2"> sausage<br>' +
                                '<input type="checkbox" name="pizza-toppings' + pizzaNumber + '" value="3"> anchovies<br>' +
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

      $("#display-cost").append("<h3>Amount due: $" + newPizza.cost() + "</h3>");

      orderCost.push(newPizza.cost());




    });

    var newOrder = new Order(orderCost);

    $("#display-cost").append("<h3>Total due: $" + newOrder.totalCost() + "</h3>");



// original

    // var pizzaSize = parseInt($("input:radio[name=pizza-size]:checked").val());
    //
    // var selectedToppings = [];
    // $("input:checkbox[name=pizza-toppings]:checked").each(function() {
    //   var checkedToppings = parseInt($(this).val());
    //   selectedToppings.push(checkedToppings);
    // });
    //
    // var newPizza = new Pizza(pizzaSize, selectedToppings);
    //
    // $("#display-cost").append("<h3>Amount due: $" + newPizza.cost() + "</h3>");
  });
});
