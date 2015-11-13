describe('pingpong_Game', function() {
  it("is true when pong is equal to 5", function() {
    var pong = 5;
    expect(pong).to.eql(5);
  });

    it("is false if enter zero", function() {
    expect(0).to.not.be.true;
  });


  it("is true for leave the bar empty", function() {
    expect('').to.be.empty;
  });

  it("is true when 3 is shown as ping", function() {
    var ping = 3;
    expect(ping).to.equal(3);
  });

});