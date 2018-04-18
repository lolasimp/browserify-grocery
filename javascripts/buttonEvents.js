const dataGatekeeper = require('./dataGatekeeper');

const goToDepartments = document.getElementById('go-to-departments');
const departmentsDiv = document.getElementById('departments');
const itemsDiv = document.getElementById('items');
const cartDiv = document.getElementById('cart');
const goToCarts = document.getElementById('go-to-carts');

const cartButton = () => {
  goToCarts.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
  });
};

const departmentsButton = () => {
  goToDepartments.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    dataGatekeeper.initializer();

  });
};

module.exports = {
  departmentsButton,
  cartButton,
};
