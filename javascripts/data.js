const loadFunction = require('./departments');
const printToDom = require('./dom');

const onloadFunction = function () {
  const data = JSON.parse(this.responseText).departments;
  printToDom(data);
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
