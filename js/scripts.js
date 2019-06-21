// order object contains everything in the user's order
function Order() {
  this.pizzas = [],
  this.drinks = [],
  this.total = 0,
  this.currentPizza = 0;
}

// pizza object. pass it the user's name so we know who's order it is
function Pizza() {
  // array of meat toppings
  this.meatToppings = [],
  // array of other toppings
  this.otherToppings = [],
  // size
  this.size = '',
  // cost
  this.cost = 0,
  // keep track of how many pizzas
  this.id = 0;
}

Order.prototype.addPizza = function() {
  var newPizza = new Pizza();
  $(newOrder.pizzas.push(newPizza));
}




// cost calculator
Pizza.prototype.totalPizzaCost = function() {
  // size toppingChoices
  var sizeChoices = ['small', 'medium', 'large', 'XL']
  var sizes = [5, 7, 9, 11];
  // add to cost based on size
  for (var i = 0; i < sizeChoices.length; i++) {
    if (sizeChoices[i] === this.size) {
      this.cost += sizes[i];
      break;
    }
  }
  // add to cost based on toppings
  for (var i = 0; i < this.meatToppings.length; i++) {
    //if the topping is a meat topping add $2
    this.cost += 2;
  };
  for (var i = 0; i < this.otherToppings.length; i++) {
    // if the topping is not a meat topping add $1
    this.cost += 1;
  };
  console.log(this.cost);
}

Pizza.prototype.addTopping = function() {
  //topping choices
  var toppingChoicesMeat = ['anchovies', 'bacon', 'chicken',  'hamburger', 'pepperoni', 'sauasage'];
  var toppingChoicesOther = ['green peppers', 'red onion', 'mushrooms', 'olives',];
  // determine which type of topping it is
  topping
}
var newOrder = new Order();
$(document).ready(function() {
  $('#addPizza').click(function() {
    newOrder.addPizza();
  })
  $('#toppings').click(function() {
    $('input:checkbox[name=meatTopping]:checked').each(function() {
      newOrder.pizzas[newOrder.currentPizza].meatToppings.push($(this).val());
    })
    $('input:checkbox[name=otherTopping]:checked').each(function() {
      newOrder.pizzas[newOrder.currentPizza].otherToppings.push($(this).val());
    })
    $('#chooseSize').click(function() {
      newOrder.pizzas[newOrder.currentPizza].size = ($(this).val());
    })
    $('#finish').click(function() {
      newOrder.pizzas[newOrder.currentPizza].totalPizzaCost();
      newOrder.total += newOrder.pizzas[newOrder.currentPizza].cost;
      $('h1').text(newOrder.total);
    })
  })
})
