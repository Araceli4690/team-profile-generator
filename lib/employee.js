class Employee {
    constructor(name, Id, email) {
        this.name = name;
        this.is = Id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.Id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;