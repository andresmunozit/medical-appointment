const pool = require('../../db/config');
const {snakeCase} = require('snake-case');
const queries = require('./queries');

class PGModel {

};

PGModel.prototype.create = async function(){
    const tableName = this.constructor.name.toLowerCase();
    const fieldNames = Object.keys(this).map( field => snakeCase(field));
    const values = Object.values(this);
    const crateQuery = new queries.InsertInto(tableName, fieldNames, values);
    try{
        const result = await pool.query({...crateQuery}); // text and value
        const newRecord = result.rows[0];
        return newRecord;
    } catch (error){
        return {error: error.toString()}
    };
};


module.exports = PGModel;