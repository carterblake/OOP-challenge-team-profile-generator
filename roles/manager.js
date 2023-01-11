const employeeClass = require('./employee');

class managerClass extends employeeClass {
    constructor (name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getOfficeNum () {
        return this.officeNum;
    }

    getRole () {
        return 'manager';
    }
}

module.exports = managerClass;