const employee = require('./employee');

class manager extends employee {
    constructor (name, id, email, moreInfo) {
        super(name, id, email);
        this.moreInfo = moreInfo;
    }
    getRole () {
        return 'manager';
    }
}
module.exports = manager;