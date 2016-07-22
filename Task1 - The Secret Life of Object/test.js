describe("Vector", function() {

  it("new Vector(1, 2).plus(new Vector(2, 3)) should return Vector{x: 3, y: 5}", function() {
    var tstObj = new Vector(3, 5);
    assert.deepEqual(new Vector(1, 2).plus(new Vector(2, 3)), tstObj);
  });

  it("new Vector(1, 2).minus(new Vector(2, 3)) should return Vector{x: -1, y: -1}", function() {
    var tstObj = new Vector(-1, -1);
    assert.deepEqual(new Vector(1, 2).minus(new Vector(2, 3)), tstObj);
  });

  it("new Vector(3, 4).length should return 5", function() {
    assert.deepEqual(new Vector(3, 4).length, 5);
  });



});

 