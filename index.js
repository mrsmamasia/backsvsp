const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')

// подключение к БД
mongoose.connect(
    'mongodb://mongodb:27017/mevnsvsp',
    {
        useCreateIndex: true,
        useNewUrlParser: true,
    }
)
//инициализация приложения
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));

// роуты
const PORT = 3000;
http.createServer({},app).listen(PORT);

console.log('Server running at $(PORT)');