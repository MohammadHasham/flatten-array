var expect = require("chai").expect;
const flatten = require('../index');
const arr = [1, [23, [4, 5, [6]]]];
it('should flatten a deep nested array',()=>{
    var result = flatten(arr);
    expect(result).to.have.lengthOf(5);
});
it('should return an array',()=>{
var result = flatten(arr);
expect(result).to.be.an.instanceof(Array);
});