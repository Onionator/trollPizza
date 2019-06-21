// pizza object. pass it the user's name so we know who's order it is
function Pizza() {
  // array of meat toppings
  this.meatToppings = ['anchovies', 'bacon', 'chicken'];
  // array of other toppings
  this.otherToppings = ['green peppers', 'red onion'];
  // size
  this.size = 'medium';
  // cost
  this.cost = 0;
}

//topping choices
var toppingChoicesMeat = ['anchovies', 'bacon', 'chicken',  'hamburger', 'pepperoni', 'sauasage']

var toppingChoicesOther = ['green peppers', 'red onion', 'mushrooms', 'olives',]

// size toppingChoices
var sizeChoices = ['small', 'medium', 'large', 'XL']
var sizes = [5, 7, 9, 11];

// create a new instance of pizza
var newPizza = new Pizza();

// cost calculator
Pizza.prototype.totalCost = function() {
  var meatCost = 2;
  var otherCost = 1;
  console.log(this.cost);
  // add to cost based on size
  for (var i = 0; i < sizeChoices.length; i++) {
    if (sizeChoices[i] === this.size) {
      this.cost += sizes[i];
      break;
    }
  }
  console.log(this.cost);
  // add to cost based on toppings
  for (var i = 0; i < this.meatToppings.length; i++) {
    //if the topping is a meat topping add $2
    this.cost += meatCost;
    console.log(this.cost);
  };
  for (var i = 0; i < this.otherToppings.length; i++) {
    // if the topping is not a meat topping add $1
    this.cost += otherCost;
    console.log(this.cost);
  };
  console.log(this.cost);
}
