// Mutable:
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName() { return this.name }

    getAge() { return this.age }
}

class Company {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.employees = []
    }

    getName() { return this.name}

    getAddress() { return this.address}

    addEmployee(employee) { this.employees.push(employee) }

    removeEmployee(employee) {
        const index = this.employees.indexOf(employee)
        this.employees.splice(index, 1)
    }

    getEmployees() { return [...this.employees] }
}
