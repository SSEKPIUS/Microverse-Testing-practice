const calculator = require('./calc.js');

describe('simple calculator add', ()=>{
  test('add multiple',()=>{
    expect(calculator.add(1,2,3)).toBe(6);
  });
  test('add empty args',()=>{
     expect(()=>calculator.add()).toThrow(/^Provide values!$/);
  });
  test('add strings',()=>{
    expect(()=>calculator.add(1,'2',3)).toThrow(/^we expect integers or floats!$/);
  });
});

describe('simple calculator subtract', ()=>{
  test('subtract multiple',()=>{
    expect(calculator.subtract(1,2)).toBe(-1);
  });
  test('subtract empty args',()=>{
     expect(()=>calculator.subtract()).toThrow(/^Provide two values!$/);
  });
  test('subtract strings',()=>{
    expect(()=>calculator.subtract(1,'2')).toThrow(/^we expect integers or floats!$/);
  });
});

describe('simple calculator divide', ()=>{
  test('divide',()=>{
     expect(calculator.divide(4,2)).toBe(2);
  });
  test('divide empty args',()=>{
     expect(()=>calculator.divide()).toThrow(/^Provide two values!$/);
  });
  test('divide strings',()=>{
    expect(()=>calculator.divide(1,'2')).toThrow(/^we expect integers or floats!$/);
  });
});

describe('simple calculator multiply', ()=>{
  test('multiply',()=>{
     expect(calculator.multiply(4,2)).toBe(8);
  });
  test('multiply empty args',()=>{
     expect(()=>calculator.multiply()).toThrow(/^Provide two values!$/);
  });
  test('multiply strings',()=>{
    expect(()=>calculator.multiply(1,'2')).toThrow(/^we expect integers or floats!$/);
  });
});
