const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

//feteches randome quote and stylizes it for the api
app.get('/api/quotes/random', (req, res, next) => {
    const ranQuote = getRandomElement(quotes);
    res.send({quote: ranQuote});
});

//Fetch by Author
app.get('/api/quotes', (req, res, next) => {
    const author = req.query.person;
    if(req.query.hasOwnProperty('person')) {
        const filterQuotes = quotes.filter(element => element.person === author);
        res.send({quotes: filterQuotes });
    } else {
        res.send({quotes: quotes });
    }
});

//Add a nerw quote
app.post('/api/quotes', (req, res, next) => {
    if(req.query.quote && req.query.person) {
        const newQuote = {quote: req.query.quote, person: req.query.person};
        quotes.push(newQuote);
        res.send({quote: newQuote});
    } else {
        res.status(400).send();
    }
})

app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT}`);
});
