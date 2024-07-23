/// data 
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


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

app.get('/roll/:number', (req, res) => {

    let num = req.params.number
    if (isNaN(num)){ //if a number
        res.send(`<h2>You must specify a number.</h2>`)
    }else{
        num = parseInt(Math.random() * num) // make into int
        res.send(`<h2>You rolled a ${num}</h2>`)
    }
});

app.get('/collectibles/:number', (req, res) => {
    
    let num = req.params.number

    if (num < collectibles.length){
        res.send(`<h2>So, you want the ${collectibles[num].name}? For ${collectibles[num].price}, it can be yours!</h2>`)
    } else {
        res.send(`<h2>This item is not yet in stock. Check back soon!</h2>`)
    }


});

app.get('/shoes', (req, res) => {

    let minPrice = parseInt(req.query['min-price'])
    let maxPrice = parseInt(req.query['max-price'])
    let type = req.query.type 
    let filteredShoe;

    if (minPrice){
        filteredShoe = shoes.filter(shoe => shoe.price >= minPrice)
    }

    if (maxPrice){
        filteredShoe = shoes.filter(shoe => shoe.price <= maxPrice)
    }

    if (type){
        filteredShoe = shoes.filter(shoe => shoe.type === type)
    }
    res.send(filteredShoe)

});



//listening on port 
app.listen(3000, () => {
    console.log('listening on port 3000')
})