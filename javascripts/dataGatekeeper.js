const loadFunction = require('./departments');
const departmentDom = require('./departmentDom');
const data = require('./data');

const onloadFunction = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  departmentDom(departmentsData);
};

const failToLoad = function () {
  console.error('This is wrong!!!');
};

const initializer = () => {
  loadFunction(onloadFunction, failToLoad);
};

module.exports = {
  initializer,
};
