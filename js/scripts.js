// business logic
function Customer(name, credit, address) {
  this.name = name;
  this.credit = credit;
  this.address = address;
  this.pizzas = [];
}

function Pizza(size, crust, cheese, meats, toppings) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.meats = meats;
  this.toppings = toppings;
}

Customer.prototype.info = function() {
  return this.name;
}

Pizza.prototype.listOrder = function() {
  return this.size + " " + this.crust + " crust " + this.cheese + " cheese " + this.meats.length + " meats and " + this.toppings.length + " toppings";
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


// user logic -----------------------------------------------------
$(document).ready(function() {

  $("form#order").submit(function(event) {
    event.preventDefault();

    // user input variables for Pizza Object
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

    // user input values for Customer Object
    var inputName = $("#name").val();
    var inputCredit = $("#credit").val();
    var inputAddress = $("#address").val();

    var newPizza = new Pizza(inputSize, inputCrust, inputCheese, inputMeats, inputToppings);

    var newCustomer = new Customer(inputName, inputCredit, inputAddress);

    // $("#orders").append("<li><span class='pizza-ordered'>" + "Thank you for your order, " + newCustomer.info() + "</span></li>");
    $("#orders").append("<li><span class='pizza-ordered'>" + newPizza.listOrder() + "</span></li>");
    $("#receipt").text("Total: $" + newPizza.cost());
  });
});
