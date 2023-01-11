const employeeClass = require('./employee');

class internClass extends employeeClass {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return 'intern';
    }
}

module.exports = internClass;