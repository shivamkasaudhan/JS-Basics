const {default: TestRunner } = require("jest-runner");
const addFive = require(`./testCode`);


test('return the number 5 ',()=> {
    expect(addFive(1)).toBe(6);
})
