var random = require('./random');
var name = require('./createName');


function CreateEmployee(data){
    console.log(data);
    this.name = name(data);
    this.salary = random(data.minSalary,data.maxSalary);
    this.tenure = random(data.minTenure,data.maxTenure);
    this.level = null;
}


function newEmployee(data){
    return new CreateEmployee(data);
}

module.exports = newEmployee;