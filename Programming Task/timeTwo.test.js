const {default: TestRunner } = require("jest-runner");
const timesTwo = require('./timesTwo');

// Write the first test
test('returns ...', () => {
    expect(timesTwo(2)).toBe(4);
});
