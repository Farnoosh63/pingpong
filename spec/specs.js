describe('pingpong_Game', function() {
  it("is false for a number that is zero and negative", function() {
    expect(results(0).to.equal(false);
  });

    it("is false for a letter", function() {
    expect(results(a).to.equal(false);
  });


  it("is true for all numbers more than zero", function() {
    expect(results(1)).to.equal(true);
  });

  it("is true when 3 is typed ping", function() {
    expect(results([3]).to.equal(['ping']);
  });

});