const employee = require ('./employee');

class engineer extends employee {
    constructor (name, id, email, moreInfo) {
        super(name, id, email);

        this.moreInfo = moreInfo;
    }
    getmoreInfo(){
        return this.moreInfo;
    }
    getRole(){
        return 'engineer';
    }
}
module.exports = 'engineer';