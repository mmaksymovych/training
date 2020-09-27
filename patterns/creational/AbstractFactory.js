//An Abstract Factory creates objects that are related by a common theme.
//In object-oriented programming a Factory is an object that creates other objects.
//An Abstract Factory has abstracted out a theme which is shared by the newly created objects.

class Employee {
  constructor(salary) {
    this.salary = salary;
  }

  showSalary = () => {
    console.log(this.salary);
  };
}

class EmployeeFactory {
  create = (salary) => {
    return new Employee(salary);
  };
}

const employeeFactory = new EmployeeFactory();

const employeeA = employeeFactory.create(1200);
const employeeB = employeeFactory.create(1400);

employeeA.showSalary();
employeeB.showSalary();
