describe("flattering", function() {

  it("flatter([[1, 2, 3], [4, 5], [6]]) should return [1, 2, 3, 4, 5, 6] ", function() {
  	var arrays = [[1, 2, 3], [4, 5], [6]];
  	assert.deepEqual(flatter(arrays), [1, 2, 3, 4, 5, 6]);
  });

});


 