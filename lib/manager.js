const employee = require('./employee');

class manager extends employee {
    constructor (name, Id, email, officeNum) {
        super(name, Id, email);
        
        this.officeNum = officeNum;
    }
    getRole () {
        return 'manager';
    }
}
module.exports = manager;