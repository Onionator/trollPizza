// order object contains everything in the user's order
function Order() {
  this.pizzas = [],
  this.drinks = [],
  this.total = 0,
  this.currentPizza = 0;
}

// pizza object. pass it the user's name so we know who's order it is
function Pizza(id) {
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
  this.id = id;
  // update the currentPizza
  newOrder.currentPizza = id;
}

Order.prototype.addPizza = function(id) {
  var newPizza = new Pizza(id);
  $(newOrder.pizzas.push(newPizza));
}




// cost calculator
Pizza.prototype.totalPizzaCost = function() {
  console.log('pizza ' + this.id + ' costs ' + this.cost + ' before adding add the costs together.');
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
  console.log('pizza ' + this.id + ' costs ' + this.cost + ' after adding add the costs.');
}

var newOrder = new Order();
$(document).ready(function() {
  var id = 0;
  // starts a new order
  $('#startOrder').click(function() {
    $('.addPizza').removeClass('hidden');
    $('.startOrder').addClass('hidden');
  })
  // adds a new pizza to the order
  $('#addPizza').click(function() {
    $('.addPizza').addClass('hidden');
    $('.finish').addClass('hidden');
    $('.formTopping').removeClass('hidden');
    newOrder.addPizza(id);
    id += 1;
    console.log('we are currently working on pizza ' + newOrder.currentPizza);
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
      console.log("before cost");
      newOrder.pizzas[newOrder.currentPizza].totalPizzaCost();
      console.log("after cost");
      newOrder.total += newOrder.pizzas[newOrder.currentPizza].cost;
      $('h1').text('$' + newOrder.total);
    });
    $('#finish').click(function() {
      $('h1').text('$' + newOrder.total + ' is your total today.');
    })
  })
})
