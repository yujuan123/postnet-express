'use strict'
let app=require('./../appBarcode.js');
let supertest=require('supertest');
//得到的request的对象直接按照   superagent 的 API 进行调用
let request =supertest(app);

let should = require('should');
let barcodeToZipcode=require('./../src/barcodeTranferZipcode.js');
describe('appBarcode.js',function () {
    var testFib = function (result, expect, done) {
        request.get('localhost:3000/barcode')
            .query({n: result})
            .end(function (err, res) {
                result.should.equal(expect);
                done(err);
            });
    };
    it('should return 0 when n === 0', function (done) {
        let result=new barcodeToZipcode().execute('| :|::| :||:: |:::| ::|:| :|:|: :||:: |')._info;
        testFib(result,'46725', done);
    });

});


