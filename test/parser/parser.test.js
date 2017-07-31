'use strict';


let should = require('should');

let Parser = require('./../../src/parser/parser.js');

describe('test parser', function(){

    it('should can parser empty string', function(){
        let express = ' ';
        let parser = new Parser([]);

        let result = parser.parse(express);

        result.should.be.an.Object()
            .and.eql({});
    });

});
