const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
var cors = require('cors');

// App
const app = express();
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
//app.options('*', cors());
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true 
})
const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// Load models
const Mentions = require('./models/mentions');
const Product = require('./models/product');
const Sale = require('./models/sale');
const User = require('./models/user');

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const mentionsRoutes = require('./routes/mentions-routes');
app.use('/mentions', mentionsRoutes);   

const productRoutes = require('./routes/product-routes');
app.use('/product', productRoutes);

const saleRoutes = require('./routes/sale-routes');
app.use('/sale', saleRoutes);

const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

const loginRoutes = require('./routes/login-routes');
app.use('/login', loginRoutes);

module.exports = app;