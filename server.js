const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

const connectDB = require('./server/database/connection');

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

app.use(morgan('tiny'));

connectDB();

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/js', express.static(path.resolve(__dirname, 'asstes/js')))

app.use('/', require('./server/routes/router'))


app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});