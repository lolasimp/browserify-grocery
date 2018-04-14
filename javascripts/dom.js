// print to dom function
// call DomString
// 2 rows of 4 -use bootstap
// make car with class of deparments
// each card should have imagetag and h3 tag
// h3 tag should have cass hide

const departmentOutputDiv = document.getElementById('departments');

const depoString = (departments) => {
  let depoString = '';
  departments.forEach((department) => {
    depoString += `<div class="col-sm-3 department">`;
    depoString += `<h3 class="hide">${department.name}</h3>`;
    depoString += `<img class="department-image" src="${department.img}">`;
    depoString += `</div>`;
  });
  return depoString;
};

const printToDom = (departments) => {
  departmentOutputDiv.innerHTML = depoString(departments);
};

module.exports = printToDom;
