'use strict';

let express=require('express');
let app=express();
let zipcodeToBarcode=require('./src/zipCodeTransferBarcode.js');
let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/zipcode',function (req,res) {
    let result=new zipcodeToBarcode().execute(req.body.zipcode)._info
    res.send(result);
});
app.listen(5000,function () {
    console.log('Example app listening 5000');
});