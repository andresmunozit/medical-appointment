const app = require('./app');
const port = process.env.PORT || 3000;

app.all((req, res) => res.json(404));

app.listen( process.env.PORT, () => {
    console.log(`App is running on port ${port}...`)
});