'use strict';

let express=require('express');
let app=express();

let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/zipcode',function (req,res) {
    res.send(req.body.barcode);
});
app.listen(5000,function () {
    console.log('Example app listening 5000');
});