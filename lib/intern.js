const employee = require('./employee');

class intern extends employee {
    constructor(name, id, email, moreInfo) {
        super(name, id, email);

        this.moreInfo = moreInfo;
    }

    getmoreInfo() {
        return this.moreInfo;
    }
    getRole() {
        return 'intern';
    }
}
module.exports = intern;