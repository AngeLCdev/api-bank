//Aquí va el código del framework del servidor

const express = require('express');


const app = express();
// settings
app.set('port', process.env.PORT || 3000);

// middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.disable('x-powered-by');

// routes
app.use('/api/v1/moves', require("./routes/moves"))
app.use('/api/v1/transfers', require("./routes/transfers"))

app.use((req, res) => {
    res.status(404).send('Not found');
})

module.exports = app;