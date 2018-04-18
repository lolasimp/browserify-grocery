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
  domString += getTotals(items);
  domString += `</div>`;
  return domString;
};

const getTotals = (items) => {
  let itemTotal = 0;
  let priceTotal = 0;
  // console.log('items', items); convert string to num by multiplying by 1
  items.forEach((item) => {
    itemTotal += (item.purchaseNum * 1);
    priceTotal += (item.purchaseNum * item.price);
  });
  return totalsString(itemTotal, priceTotal);
  // console.log('itemTotal', itemTotal);
  // console.log('priceTotal', priceTotal);
};

const totalsString = (itemNum, total) => {
  let domString = '';
  domString += `<h4>Total number of items: ${itemNum}</h4>`;
  domString += `<h4>Total price: $${total.toFixed(2)}</h4>`;
  return domString;
};

const printToCart = () => {
  const cartItems = data.getCart();
  cartOutputDiv.innerHTML = cartDomString(cartItems);
  // console.log('cartItems', cartItems);
};

module.exports = printToCart;
