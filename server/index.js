const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', require('./apiRoutes'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public'))
})

app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(port, () => {
    console.log(`Server listening on Port ${port}`)
})
