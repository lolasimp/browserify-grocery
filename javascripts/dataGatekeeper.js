const loadFunction = require('./departments');
const dom = require('./departmentDom');

const onloadFunction = function () {
  const data = JSON.parse(this.responseText).departments;
  departmentDom(data);
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
