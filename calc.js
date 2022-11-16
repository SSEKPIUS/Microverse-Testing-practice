class calculator {
  add(...args){
    let sum=0;
    if(Object.keys(arguments).length === 0) throw new Error('Provide values!');
    for (const [key, value] of Object.entries(arguments)) {
      if(!Number.isInteger(value) || !Number.parseFloat(value)) throw new Error("we expect integers or floats!");
      sum+=value;
    }
    return sum;
  } 
  
  subtract(...args){
    if(Object.keys(arguments).length !== 2) throw new Error('Provide two values!');
    for (const [key, value] of Object.entries(arguments)) {
      if(!Number.isInteger(value) || !Number.parseFloat(value)) throw new Error("we expect integers or floats!");
    }
    return arguments[0]-arguments[1];
  }
  
  divide(...args){
    if(Object.keys(arguments).length !== 2) throw new Error('Provide two values!');
    for (const [key, value] of Object.entries(arguments)) {
      if(!Number.isInteger(value) || !Number.parseFloat(value)) throw new Error("we expect integers or floats!");
    }
    return arguments[0]/arguments[1];
  }
  
  multiply(...args){
    if(Object.keys(arguments).length !== 2) throw new Error('Provide two values!');
    for (const [key, value] of Object.entries(arguments)) {
      if(!Number.isInteger(value) || !Number.parseFloat(value)) throw new Error("we expect integers or floats!");
    }
    return arguments[0]*arguments[1];
  }
}

module.exports = new calculator;