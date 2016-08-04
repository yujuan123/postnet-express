'use strict';
let req=require('superagent');
let zipcodeToBarcode=require('./src/zipCodeTransferBarcode.js');

req
    .post('localhost:5000/zipcode')
    .send({barcode:new zipcodeToBarcode().execute("12345")._info})
    .end(function (err,res) {
        if(res.statusCode===200){
            console.log("right!"+res.text);
        }else{
            console.log("wrong!");
        }
    });