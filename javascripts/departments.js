const allDepartmentsLoad = (onloadFunction, failToLoad) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', onloadFunction);
  myRequest.addEventListener('error', failToLoad);
  myRequest.open('GET', '../db/departments.json');
  myRequest.send();
};

module.exports = allDepartmentsLoad;
