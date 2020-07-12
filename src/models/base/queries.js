const Query = require('./query');

class InsertInto extends Query {
    constructor(tableName, fieldNames, values){
        super(undefined, values);
        this.values = values;
        this.text = `INSERT INTO ${tableName} (${fieldNames.join(`, `)}) VALUES (${values.map( (value, index) => ('$'+ (index+1))).join(`, `)}) RETURNING *`;
    };
};

module.exports = {
    InsertInto,
};