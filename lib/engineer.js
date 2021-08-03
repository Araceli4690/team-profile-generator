const employee = require ('./employee');

class engineer extends employee {
    constructor (name, Id, email, gitHub) {
        super(name, Id, email);

        this.gitHub = gitHub;
    }
    getgitHub(){
        return this.gitHub;
    }
    getRole(){
        return 'engineer';
    }
}
module.exports = engineer;