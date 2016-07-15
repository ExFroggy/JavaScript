describe("arrayToList()", function() {

  it("arrayToList([10, 20]) should return object {value: 10, rest: {value: 20, rest: null}} ", function() {
  	var testObj = {value: 10, rest: {value: 20, rest: null}};
  	assert.deepEqual(arrayToList([10, 20]), testObj);
  });

});

describe("listToArray()", function() {

 it("listToArray(arrayToList([10, 20, 30])) should return array [10, 20, 30]", function() {
    assert.deepEqual(listToArray(arrayToList([10, 20, 30])), [10, 20, 30]);
 });

});

describe("prepend()", function() {

 it("prepend(10, prepend(20, null)) should return object {value: 10, rest: {value: 20, rest: null}}", function() {
 	var testObj = {value: 10, rest: {value: 20, rest: null}};
    assert.deepEqual(prepend(10, prepend(20, null)), testObj);
 });

});


describe("nth()", function() {

 it("nth(arrayToList([10, 20, 30]), 1) should return  20", function() {
    assert.equal(nth(arrayToList([10, 20, 30]), 1), 20);
 });

});

 