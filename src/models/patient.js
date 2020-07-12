const Model = require('./base/model');
class Patient {
    constructor(id, name, lastName, dateOfBirth, gender){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
    };

    static genders = {
        MALE: 'male',
        FEMALE: 'female'
    };

    static all = new Model();

    static find(id){
        if(id) return Patient.all.get(id); // undefined
        else return Patient.all;
    };

};

Patient.prototype.save = function(){
    Patient.all.set(this.id, this);
    return this;
};

Patient.prototype.update = function(patient){
    for(let field in patient){
        if (field === 'id') continue;
        this[field] = patient[field];
    };
    return this;
};

Patient.prototype.delete = function(){
    return Patient.all.delete(this.id); // true or false
};

module.exports = Patient;
