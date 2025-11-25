const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	array.forEach(num => {
    // console.log("num: ", num);
    sum += num;
  });

  // console.log('Suma total: ', sum);
  return sum;
};

const multiply = function(array) {
  let multiply = 1;
  array.forEach( num => {
    multiply *= num;
  });
  // console.log('Resultado: ', multiply);
  return multiply
};

const power = function(base, exponent) {
  result = 1;
  for(let i = 0; i < exponent; i++) {
    result *= base; 
  }

  return result;
};

const factorial = function(a) {
  result = 1;
  for(let i = 1; i <= a; i++) {
    result *= i; 
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
