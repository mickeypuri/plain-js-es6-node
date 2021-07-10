// const Calculator = require('./calculator');
// const tripler = require('./tripler');
// const multiplier = require('./multiplier');
//const doubler = multiplier.doubler;

import Calculator from './calculator.js';
import tripler from "./tripler.js";
import {doubler, quad} from './multiplier.js';

const calculator = new Calculator();
const result = calculator.add(10, 30);

const input = 200;
const doubleInput = doubler(input);
console.log(doubleInput);

const quadInput = quad(input);
console.log(`quad of ${input}: ${quadInput}`);
console.log(`triple of ${input}: ${tripler(input)}`);

