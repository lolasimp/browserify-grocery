const loadFunction = require('./departments');

const onloadFunction = function () {
  const data = JSON.parse(this.responseText).departments;
  console.log('departments', data);
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
