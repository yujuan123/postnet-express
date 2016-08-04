'use strict'
let req=require('superagent');


req
    .get('localhost:3000/barcode')
    .query({barcode:'| :|::| :||:: |:::| ::|:| :|:|: :||:: |'})
    .end(function (err, res) {
        if (res.statusCode === 200) {
            console.log("right!" + res.text);
        }
        else {
            console.log("error");
        }
    });