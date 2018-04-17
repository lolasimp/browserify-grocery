let departments = [];
let items = [];
const cart = [];

const getDepartments = () => {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

const setItems = (itemsArray) => {
  items = itemsArray;
};

const getItems = () => {
  return items;
};

const getItemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

const setCart = (itemId, numberToAdd) => {
  const itemPosition = items.map(function (item) {
    return item.id;
  }).indexOf(itemId);
  // map returns the index position to make [items0, items1]
  // index OF is finding the index of the array of ids
  // console.log('itemPosition', items[itemPosition]);
  const newItem = items[itemPosition];
  newItem.purchaseNum = numberToAdd;
  // console.log('newItem', newItem);
  cart.push(newItem);
};

module.exports = {
  getDepartments,
  setDepartments,
  setItems,
  getItems,
  getItemsByDepartment,
  setCart,
};
