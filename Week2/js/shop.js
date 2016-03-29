var  customerName = "Sajag";
var price = 10;
var quantity = 2;
var totalPrice = price * quantity;
var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;
var customerElement = document.getElementById("total-price");
customerElement.textContent = totalPrice;