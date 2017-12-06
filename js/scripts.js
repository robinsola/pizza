function Pizza(size, crust, cheese, meat, topping) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.meat = meat;
  this.topping = topping;
  this.customer = [];
}

function Customer(name, credit, address) {
  this.name = name;
  this.credit = credit;
  this.address = address;
}

Pizza.prototype.cost = function() {

}
