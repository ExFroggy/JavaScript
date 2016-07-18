describe("reverseArray()", function() {

  it("reverseArray(['A', 'B', 'C']) should return ['C', 'B', 'A']", function() {
  	var testArray = ["C", "B", "A"];
  	assert.deepEqual(reverseArray(["A", "B", "C"]), testArray);
  });

});

describe("reverseArrayInPlace()", function() {

 it("reverseArrayInPlace([1, 2, 3, 4, 5]) should return set [5, 4, 3, 2, 1] in place ", function() {

	var arrayValue = [1, 2, 3, 4, 5];
	reverseArrayInPlace(arrayValue);

    assert.deepEqual(arrayValue, [5, 4, 3, 2, 1]);
  });

});

 