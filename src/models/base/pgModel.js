const pool = require('../../db/config');
const {snakeCase} = require('snake-case');
const queries = require('./queries');

class PGModel {

};

PGModel.prototype.create = async function(){
    const tableName = this.constructor.name.toLowerCase();
    const fieldNames = Object.keys(this).map( field => snakeCase(field));
    const values = Object.values(this);

    const query = new queries.InsertInto(tableName, fieldNames, values);
    try{
        const result = await pool.query(query.text, query.values);
        const newPatient = result.rows[0];
        return newPatient;
    } catch (error){
        return {error: error.toString()}
    };
};


module.exports = PGModel;