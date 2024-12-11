const express = require('express');
const app = express();

const axios = require('axios');
const cheerio = require('cheerio');
const he = require('he');

const clock = require('./ascii/clock.js');
clock(app);

const epita = require('./ascii/epita.js');
epita(app);

const epiquote = require('./ascii/epiquote.js');
epiquote(app, axios, cheerio, he);

const h4ck3r = require('./ascii/h4ck3r.js');
h4ck3r(app);

const help = require('./ascii/help.js');
help(app);

// Lancer le serveur
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running`);
});
