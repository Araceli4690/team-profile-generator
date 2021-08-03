const employee = require('./employee');

class intern extends employee {
    constructor(name, Id, email, school) {
        super(name, Id, email);

        this.school = school;
    }

    getschool() {
        return this.school;
    }
    getRole() {
        return 'intern';
    }
}
module.exports = intern;