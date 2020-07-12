const {Router} = require('express');
const Patient = require('../models/patient');

const router = new Router();

router.post('/', (req,res) => {
    const {id, name, lastName, dateOfBirth, gender} = req.body;
    const patient = new Patient(id, name, lastName, dateOfBirth, gender);
    if(patient.save()) return res.json(patient);
    res.status(500).json();
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