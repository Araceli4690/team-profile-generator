const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor (name, Id, email, gitHub) {
        super(name, Id, email);

        this.gitHub = gitHub;
    }
    getGithub(){
        return this.gitHub;
    }
    getRole(){
        return 'Engineer';
    }
}
module.exports = Engineer;