require('dotenv').config();
const express = require('express');
const path= require ('path');
const mongoose = require('mongoose');

const app = express();

// inportando rutas
const eventRoute = require('./src/routes/event.route');
const inscriptionRoute = require('./src/routes/inscription.route');

// settings
app.set('port', process.env.PORT || 4000);
app.set('uri', process.env.MONGO_URL);
// const URL = process.env.MONGO_URL;
app.set('view engine', 'ejs');
app.set('views', path.join('./src/views'));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/events', eventRoute);
app.use('/api/inscriptions', inscriptionRoute); 

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        rutaActual: '/',
    });
});

// archivos estaticos
app.use('/public',express.static(path.join('./src/views/public')));


// iniciando servidor
mongoose.connect(app.get('uri'))
    .then(() => {
        console.log("Connected to database!");
        app.listen(app.get('port'), () => {
            console.log('Server is running on port', app.get('port'));
        });
    })
    .catch(() => {
        console.log("connection failed!");
    });




