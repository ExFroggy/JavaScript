describe("historical life expectancy", function() {

  it("getStatistic() should return ['16: 43.5', '17: 51.2', '18: 52.78947368421053', '19: 54.833333333333336', '20: 84.66666666666667', '21: 94'] ", function() {
    var resultArr =  ["16: 43.5", "17: 51.2", "18: 52.78947368421053", "19: 54.833333333333336", "20: 84.66666666666667", "21: 94"];
  	assert.deepEqual(getStatistic(), resultArr);
  });

});


 