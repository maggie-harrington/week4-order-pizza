// back end

function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.cost = function() {
  return this.pizzaSize + this.pizzaToppings;
}




// front end
