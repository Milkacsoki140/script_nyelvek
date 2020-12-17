const nodejs_express = require('express');
const  nodejs_body_parser = require('body-parser');
const  fs = require('fs');
const szerver = nodejs_express();

szerver.use(nodejs_body_parser.json());
szerver.use(nodejs_body_parser.urlencoded({ extended: true }));

const routerek = require('./router/router.js')(szerver, fs);

const StartSzerver = szerver.listen(3001, () => {
    console.log("Nodejs restapi szerver szóval just do it");
    console.log("szerver port : ")
    console.log(StartSzerver.address().port);
});