// business logic

function Pizza(size, crust, cheese, meats, toppings) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.meats = meats;
  this.toppings = toppings;
  this.customer = [];
}

function Customer(name, credit, address) {
  this.name = name;
  this.credit = credit;
  this.address = address;
}

Pizza.prototype.cost = function() {

}


// user logic
$(document).ready(function() {

  $("form#order").submit(function(event) {
    event.preventDefault();

    debugger;
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

    console.log(newPizza);
  });
});
