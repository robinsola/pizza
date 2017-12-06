// business logic

function Pizza(size, crust, cheese, meats, toppings, total) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.meats = meats;
  this.toppings = toppings;
  this.total = total;
  this.customer = [];
}

function Customer(name, credit, address) {
  this.name = name;
  this.credit = credit;
  this.address = address;
}

Pizza.prototype.cost = function() {
  var crustCost = 0;
  var cheeseCost = 0;
  var meatsCost = this.meats.length * 2;
  var toppingsCost = this.toppings.length * .50;
  if (this.size === "large") {
    crustCost += 20;
  } else if (this.size === "medium") {
    crustCost += 12;
  } else if (this.size === "small") {
    crustCost += 6;
  }
  if (this.cheese === "extra") {
    cheeseCost += 1;
  }
  return crustCost + cheeseCost + meatsCost + toppingsCost;
};


// user logic
$(document).ready(function() {

  $("form#order").submit(function(event) {
    event.preventDefault();

    var inputSize = $("input:radio[name=size]:checked").val();
    var inputCrust = $("input:radio[name=crust]:checked").val();
    var inputCheese = $("input:radio[name=cheese]:checked").val();
    var inputMeats = [];
    var inputToppings = [];
    $("input:checkbox[name=meat]:checked").each(function() {
      var meatsChecked = $(this).val();
      inputMeats.push(meatsChecked);
    });
    $("input:checkbox[name=top]:checked").each(function() {
      var toppingsChecked = $(this).val();
      inputToppings.push(toppingsChecked);
    });

    var newPizza = new Pizza(inputSize, inputCrust, inputCheese, inputMeats, inputToppings);

    $("#receipt").text(newPizza.cost());
  });
});
