const loadItems = (onloadFunction, failToLoad) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', onloadFunction);
  myRequest.addEventListener('error', failToLoad);
  myRequest.open('GET', '../db/items.json');
  myRequest.send();
};

module.exports = loadItems;
