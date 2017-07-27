'use strict';


let should = require('should');

let parser = require('./../../src/parser/parser.js');

describe('test parser', function(){

    it('should can parser empty string', function(){
        let express = ' ';
        let result = parser(express);

        result.should.be.an.Object()
            .and.eql({});
    });

});
