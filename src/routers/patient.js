const {Router} = require('express');
const Patient = require('../models/patient');

const router = new Router();

router.post('/', async (req,res) => {
    const {name, lastName, dateOfBirth, gender} = req.body;
    const patient = new Patient(name, lastName, gender, dateOfBirth);
    const newPatient = await patient.create();
    if(newPatient.error) return res.status(500).json({error: newPatient.error});
    res.json(newPatient);
});

router.get('/', (req, res) => {
    const patients = Patient.find();
    res.json(patients);
});

router.get('/:id', (req, res) => {
    const patient = Patient.find(req.params.id);
    if(!patient) return res.status(404).json();
    res.json(patient);
});

router.delete('/:id', (req, res) => {
    const patient = Patient.find(req.params.id);
    if(!patient) return res.status(404).json();
    if(patient.delete()) return res.json();
    else res.status(500).json();
});

router.patch('/:id', (req, res) => {
    const patient = Patient.find(req.params.id);
    if(!patient) return res.status(404).json();
    const updatedPatient = patient.update(req.body);
    if(updatedPatient) return res.json(updatedPatient);
    else res.status(500).json();
});


module.exports = router;