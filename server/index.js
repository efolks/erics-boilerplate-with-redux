const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')

app.use(morgan)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use(express.static(path.join(__dirname, '..', 'public')));
