const mytests =  require('./index.js');

describe('Remedial Test', ()=>{
  test('takes any string as an argument and returns its characters count.', () => {
    expect(mytests.stringLength("hello")).toBe(5);
    expect(mytests.stringLength("hello")).toBeGreaterThanOrEqual(1);
  });

  test(' the string is at least 1 character long and not longer than 10 characters.', () => {
    expect(() => mytests.stringLength("")).toThrow(/^String is lessn than 1 character or more than 10 characters!$/);
    expect(() => mytests.stringLength("helloHelloHello")).toThrow(/^String is lessn than 1 character or more than 10 characters!$/);
  })
});
