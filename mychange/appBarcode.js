'use strict';
let express=require('express');
let app=express();


app.get('/barcode',function (req,res) {
    res.send(req.query.zipcode);
});
app.listen(3000,function () {
    console.log('Example app listening on port 3000');
});
module.exports=app;