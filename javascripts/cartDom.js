const data = require('./data');
const cartOutputDiv = document.getElementById('cart');

const cartDomString = (items) => {
  let domString = '<h3 text-center>Your Cart</h3>';
  domString += `<div class="col-xs-8 col-xs-offset-2">`;
  domString += `<table class="table table-striped">`;
  domString += `<tr>`;
  domString +=    `<th>Name</th>`;
  domString +=    `<th>Price</th>`;
  domString +=    `<th>Quanity</th>`;
  domString +=  `<th><th>`;
  domString += `</tr>`;
  items.forEach((item) => {
    domString +=  `<tr>`;
    domString +=  `<td>${item.name}</td>`;
    domString +=  `<td>$${item.price.toFixed(2)}</td>`;
    domString +=  `<td>${item.purchaseNum}</td>`;
    domString += `<td><button class="btn btn-danger"><span class="glyphicon glyphicon-trash"<button></td>`;
    domString +=  `</tr>`;
  });
  domString += `</table>`;
  domString += `</div>`;
  return domString;
};

const printToCart = () => {
  const cartItems = data.getCart();
  cartOutputDiv.innerHTML = cartDomString(cartItems);
  // console.log('cartItems', cartItems);
};

module.exports = printToCart;
