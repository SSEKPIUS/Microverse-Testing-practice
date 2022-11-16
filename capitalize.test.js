const capitalize = require('./capitalize.js');

describe('writing a test for a capitalize(string) function', ()=>{
  test('takes a string as an argument and returns that string with the first character capitalized',()=>{
    expect(capitalize('hello')).toMatch(/Hello/);
  });
});