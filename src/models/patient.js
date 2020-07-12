const PGModel = require('./base/pgModel');

class Patient extends PGModel{
    constructor(name, lastName, gender, dateOfBirth){
        super();
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
    };
};

module.exports = Patient;
