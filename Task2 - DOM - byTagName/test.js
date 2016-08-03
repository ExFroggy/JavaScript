describe("by Tag name", function() {
     
  it("byTagName(document.body, 'h1').length should return 2 (including test 'by Tag name' heading)", function() {
    assert.equal(byTagName(document.body, "h1").length, 2);
  });

  it("byTagName(document.body, 'span').length should return 4 (including test comments) ", function() {
    assert.equal(byTagName(document.body, "span").length, 4);
  });

  it("byTagName(para, 'span').length where para is querySelector('p') should return 2 ", function() {
  	var para = document.querySelector("p");
    assert.equal(byTagName(para, "span").length, 2);
  });

});

 