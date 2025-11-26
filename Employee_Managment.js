class Employee {
  constructor(id, name, department, salary) {
    this.id = id
    this.name = name
    this.department = department
    this.salary = salary
  }

  getAnnualSalary() {
    return this.salary * 12
  }

  applyBonus(percent) {
    let bonus = (this.salary * percent) / 100
    this.salary = this.salary + bonus
  }
}

let e1 = new Employee(1, "Amit", "HR", 30000)
let e2 = new Employee(2, "Riya", "IT", 45000)
let e3 = new Employee(3, "Karan", "Finance", 40000)
let e4 = new Employee(4, "Sneha", "IT", 38000)
let e5 = new Employee(5, "Raj", "Marketing", 32000)

e1.applyBonus(10)
e3.applyBonus(5)

let employees = [e1, e2, e3, e4, e5]

for (let i = 0; i < employees.length; i++) {
  console.log(
    employees[i].name + " - Annual Salary: " + employees[i].getAnnualSalary()
  )
}

let totalPayout = employees.reduce(function (acc, emp) {
  return acc + emp.getAnnualSalary()
}, 0)

console.log("Total Annual Payout:", totalPayout)
