const loadFunction = require('./departments');
const loadItems = require('./items');
const departmentDom = require('./departmentDom');
const data = require('./data');

const onloadFunction = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  departmentDom(departmentsData);
};

const whenItemsLoad = function () {
  const itemsData = JSON.parse(this.responseText).items;
  // console.log('itemsData', itemsData);
  data.setIems(itemsData);
};

const failToLoad = function () {
  console.error('This is wrong!!!');
};

const initializer = () => {
  loadFunction(onloadFunction, failToLoad);
  loadItems(whenItemsLoad, failToLoad);
};

module.exports = {
  initializer,
};
