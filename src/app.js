const express = require('express');
const app = express();

const patientRouter = require('./routers/patient');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/patients', patientRouter);

app.get('/', (req, res) => {
    res.json('App us running...');
});

module.exports = app;