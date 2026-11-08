function sum (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

//-------------------------------------------------------------
// Metodo de exportacion de funcion por medio de CommonJS
//-------------------------------------------------------------
module.exports = {
    sum,
    sub //exporting the sum function so that it can be used in other files
};
