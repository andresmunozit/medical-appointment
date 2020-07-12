// https://node-postgres.com/features/queries
class Query{
    constructor(text, values = []){
        this.text = text;
        this.values = values;
    };
};

module.exports = Query;

