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
  // drink
  this.drink = '',
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
  // what drink did the user get
  if (this.drink !== 'no drink') {
    this.cost += 2;
  }
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
  // starts a new order
  $('#startOrder').click(function() {
    $('.addPizza').removeClass('hidden');
    $('.startOrder').addClass('hidden');
  })
  // adds a new pizza to the order
  $('#addPizza').click(function() {
    $('.addPizza').addClass('hidden');
    $('.formTopping').removeClass('hidden');
    newOrder.addPizza();
  })
  // allows user to choose toppings for his pizza
  $('#toppings').click(function() {
    $('.formTopping').addClass('hidden');
    $('.formSize').removeClass('hidden');
    $('input:checkbox[name=meatTopping]:checked').each(function() {
      newOrder.pizzas[newOrder.currentPizza].meatToppings.push($(this).val());
    })
    $('input:checkbox[name=otherTopping]:checked').each(function() {
      newOrder.pizzas[newOrder.currentPizza].otherToppings.push($(this).val());
    })
    // allows user to choose a size for his pizza
    $('#chooseSize').click(function() {
      $('.formSize').addClass('hidden');
      $('.drinkOption').removeClass('hidden');
      //records this size
      newOrder.pizzas[newOrder.currentPizza].size = $('input:radio[name=size]:checked').val();
    })
    $('#drinkOption').click(function() {
      $('.drinkOption').addClass('hidden');
      $('.addPizza').removeClass('hidden');
      $('.finish').removeClass('hidden');
      // did the user get a drink?
      newOrder.pizzas[newOrder.currentPizza].drink = $('input:radio[name=drink]:checked').val()
      // current total
      newOrder.pizzas[newOrder.currentPizza].totalPizzaCost();
      newOrder.total += newOrder.pizzas[newOrder.currentPizza].cost;
      $('h1').text('$' + newOrder.total);
    })
    $('#finish').click(function() {
      $('h1').text('$' + newOrder.total + ' is your total today.');
    })
  })
})
