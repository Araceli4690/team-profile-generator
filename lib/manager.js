const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, Id, email, officeNum) {
        super(name, Id, email);
        
        this.officeNum = officeNum;
    }
    getRole () {
        return 'Manager';
    }
}
module.exports = Manager;