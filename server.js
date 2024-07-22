// import express 
const express = require('express')
const morgan = require('morgan')

// create express app 
const app = express()
app.use(morgan('dev'))

// routes

app.get('/greetings/:name', (req, res) => {
    res.send(`<h2>What a delight it is to see you once more, ${req.params.name}</h2>`)
});



//listening on port 

app.listen(3000, () => {
    console.log('listening on port 3000')
})