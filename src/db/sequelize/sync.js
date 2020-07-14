const Patient = require('../../models/patient');
const FORCE = true;

(async () => {
    try {
        await Patient.sync({force: FORCE});
        console.log('All models have been synchronized successfully...')
    } catch (e){
        console.log(e.toString());
    };
})();