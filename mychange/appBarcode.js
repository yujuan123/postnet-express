'use strict';
let express=require('express');
let app=express();
let barcodeToZipcode=require('./src/barcodeTranferZipcode.js');

app.get('/barcode',function (req,res) {
    let result=new barcodeToZipcode().execute(req.query.barcode)._info;
    res.send(result);
});
app.listen(3000,function () {
    console.log('Example app listening on port 3000');
});
module.exports=app;
