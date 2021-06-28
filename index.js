const employee = {
name: "Preeti",
streetAddress: "123 New York"
}
//employee.name = "Sam";
//employee.streetAddress = "11 Broadway"
/*function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}.employee, {[key]:value})
}

function destructivelyUpdateEmployeeWithKeyandValue(employee, key, value) {
  return Object
}*/
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, {name: 'Sam'}, {streetAddress: '11 Broadway'});
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee['name'] = 'Sam';
  employee['streetAddress'] = '12 Broadway';
  return employee
}
function deleteFromEmployeeByKey (employee, key) {
  return Object.assign({}, employee, {name: undefined});
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee.name;
  return employee;
}