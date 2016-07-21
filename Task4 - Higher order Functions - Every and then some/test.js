describe("flattering", function() {

    it("every([NaN, NaN, NaN], isNaN) should return true ", function() {
  	assert.equal(every([NaN, NaN, NaN], isNaN), true);
  });

   it("every([NaN, NaN, 4], isNaN) should return false ", function() {
  	assert.equal(every([NaN, NaN, 4], isNaN), false);
  });

    it("some([NaN, 3, 4], isNaN) should return true ", function() {
  	assert.equal(some([NaN, 3, 4], isNaN), true);
  });

      it("some([2, 3, 4], isNaN) should return false ", function() {
  	assert.equal(some([2, 3, 4], isNaN), false);
  });
});


 