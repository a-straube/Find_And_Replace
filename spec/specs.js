describe('contains', function() {
  it('returns true if a word is contained in a sentence', function() {
    expect(contains("once upon a time", 'time')).to.equal(true);
  });
});
