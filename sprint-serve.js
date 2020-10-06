const colors = require('colors');
const express = require('express');
const fs = require('fs-extra');
const minify = require('minify');

const app = express();
app.use(express.static('./static'));
app.use('/_sprint/views', express.static('./views'));

app.get('/sprint.conf.js', (req, res) => {
    fs.readFile('./sprint.conf.js', 'utf8', (err, data) => {
        res.send(err || data);
    });
});

app.get('/_sprint/sprint.min.js', (req, res) => {
    minify(__dirname + '/web.js')
        .then(data => res.send(data))
        .catch(err => res.send(err));
})

app.use((req, res) => {
    fs.readFile('./index.html', 'utf8', (err, data) => {
        res.send(err || data);
    });
});

app.listen(8080, () => {
    console.log('Development server running on localhost:8080!'.rainbow.bold);
});