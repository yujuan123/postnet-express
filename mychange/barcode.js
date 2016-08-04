'use strict'
let req=require('superagent');
let barcodeToZipcode=require('./src/barcodeTranferZipcode.js');

req
    .get('localhost:3000/barcode')
    .query({zipcode:new barcodeToZipcode().execute('| :|::| :||:: |:::| ::|:| :|:|: :||:: |')._info})
    .end(function (err, res) {
        if (res.statusCode === 200) {
            console.log("right!" + res.text);
        }
        else {
            console.log("error");
        }
    });