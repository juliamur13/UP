const express = require('express');
const fs = require('fs');
const actions = require('./public/script.js');
const app = express();
app.use('/', express.static('public'));
let posts = JSON.parse(fs.readFileSync('./public/server/data/posts.json'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(3000, () => {
    console.log('Server is running...');
});

app.get('/getAllPhotoPosts', (req, res) => {
    if (posts) {
        res.send(posts);
    }
    else {
        res.status(404).end();
    }
});

app.get('/getAllPhotoPosts', (req, res) => {
    if (posts) {
        res.send(posts);
    }
    else {
        res.status(404).end();
    }
});