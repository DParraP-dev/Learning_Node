//-------------------------------------------------------------
// Metodo de exportacion de funcion por medio de CommonJS
//-------------------------------------------------------------
const { sum } = require('./operations');  //importing the sum function from operations.js
const { sub } = require('./operations');  //importing the sub function from operations.js

console.log(sum(1, 2));
console.log(sub(5, 3));
