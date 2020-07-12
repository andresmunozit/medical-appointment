class Model extends Map {
    constructor(){
        super();
    };
};

Model.prototype.toJSON = function(){
    return Array.from(this.values());
};

module.exports = Model;