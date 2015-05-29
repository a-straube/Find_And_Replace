describe('findAndReplace', function() {
  it('replaces a searched word in a sentence with a replacement word', function() {
    expect(findAndReplace("Hello world", "world", "friend")).to.equal("Hello friend");
  });
});
