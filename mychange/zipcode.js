'use strict';
let req=require('superagent');


req
    .post('localhost:5000/zipcode')
    .send({zipcode:"12345"})
    .end(function (err,res) {
        if(res.statusCode===200){
            console.log("right!"+res.text);
        }else{
            console.log("wrong!");
        }
    });