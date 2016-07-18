describe("range()", function() {

  it("range(1, 10) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", function() {
  	var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  	assert.deepEqual(range(1,10), testArray);
  });

  it("range(5, 2, -1) should return [5, 4, 3, 2]", function() {
    assert.deepEqual(range(5, 2, -1), [5, 4, 3, 2]);
  });

});

describe("sum()", function() {

 it("sum(range(1, 10)) should return 55 ", function() {
    assert.equal(sum(range(1, 10)), 55);
  });

});

 