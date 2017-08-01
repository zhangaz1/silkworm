'use strict';


let should = require('should');

let Parser = require('./../../src/parser/parser.js');

describe('test parser', function(){

    let fields = [];
    let parser;

    beforeEach(function(){
        parser = new Parser(fields);
    });

    it('should can parser empty string', function(){
        let express = ' ';
        let result = parser.parse(express);

        result.should.be.an.Object()
            .and.eql({});
    });

});
