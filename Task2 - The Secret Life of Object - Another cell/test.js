describe("StretchCell", function() {

  before(function() {
    // runs before all tests in this block
    var sc = new StretchCell(new TextCell("abc"), 1, 2);
  });

  it("sc.minWidth() should return 3", function() {
    assert.equal(sc.minWidth(), 3);
  });

  it("sc.minHeight() should return 2", function() {
    assert.equal(sc.minHeight(), 2);
  });

  it("sc.draw(3, 2) should return ['abc', ''   '']", function() {
    assert.deepEqual(sc.draw(3, 2), ["abc", "   "]);
  });


});

 