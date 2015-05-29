describe('findAndReplace', function() {
  it('replaces a searched word in a sentence with a replacement word', function() {
    expect(findAndReplace("Hello world", "world", "friend")).to.equal("Hello friend");
  });

  it('replaces a searched word in a sentence with a replacement word, regardless of capitalization', function() {
    expect(findAndReplace("Hello WORLD", "world", "friend")).to.equal("Hello friend");
  });

  it('replaces a searched word in a sentence with a replacement word, regardless of attached punctuation', function() {
    expect(findAndReplace("Hello world!", "world", "friend.")).to.equal("Hello friend.");
  });
});
