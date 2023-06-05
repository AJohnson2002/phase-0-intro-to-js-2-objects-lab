const employee = {
    name: ["Avery", "Johnson"],
    address: ["900", "E", "Lindsey", "St"]
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    
    return employee;
}
const employee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Avery", "Maddie")

function deleteFromEmployeeByKey(employee, key) {
    const employee3 = {...employee[key]};
    delete employee3[key];
    return employee3;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}