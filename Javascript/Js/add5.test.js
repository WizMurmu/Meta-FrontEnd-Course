const {default: TestRunner } = require("jest-runner");
const add5 = require(`./add5`);// the / indicates that the file exists i the same folder
test('return thhe number plus 5', () =>{
    expect(add5(1)).toBe(6);
})