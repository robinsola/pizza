// business logic
function Customer(name, credit, address) {
  this.name = name;
  this.credit = credit;
  this.address = address;
  this.pizzas = [];
}

function Pizza(size, crust, sauce, cheez, meats, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheez = cheez;
  this.meats = meats;
  this.toppings = toppings;
}

Customer.prototype.info = function() {
  return this.name;
}

Pizza.prototype.listOrder = function() {
  return this.size + " " + this.crust + " crust, " + this.cheez + " cheez, " + this.meats.length + " meatz, and " + this.toppings.length + " toppings";
}


Pizza.prototype.cost = function() {
  var crustCost = 0;
  var cheezCost = 0;
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
    cheezCost += 1;
  }
  return crustCost + cheezCost + meatsCost + toppingsCost;
};


// user logic -----------------------------------------------------
$(document).ready(function() {

  $("form#order").submit(function(event) {
    event.preventDefault();
    $("body").removeClass("hide-bg");

    // user input variables for Pizza Object
    var inputSize = $("input:radio[name=size]:checked").val();
    var inputCrust = $("input:radio[name=crust]:checked").val();
    var inputSauce = $("input:radio[name=sauce]:checked").val();
    var inputCheez = $("input:radio[name=cheez]:checked").val();
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

    var newPizza = new Pizza(inputSize, inputCrust, inputSauce, inputCheez, inputMeats, inputToppings);

    var newCustomer = new Customer(inputName, inputCredit, inputAddress);

    $(".jumbotron").hide();
    $("form#order").hide();
    $("body").addClass("hide-bg");
    $(".receipt").fadeIn();
    $("#receipt-name").text(newCustomer.name);
    // $("#receipt-orders").text(newPizza.listOrder());
    $("#receipt-orders").append("<li>" + newPizza.size + " " + newPizza.crust + " crust" + "</li>")
    $("#receipt-orders").append("<li>" + newPizza.sauce + " sauce and " + newPizza.cheez + " cheez" + "</li>")
    $("#receipt-orders").append("<li>" + "Meatz: " + newPizza.meats + "</li>")
    $("#receipt-orders").append("<li>" + "Toppings: " + newPizza.toppings + "</li>")
    $("#receipt-total").text("Total: $" + newPizza.cost());
  });
});
