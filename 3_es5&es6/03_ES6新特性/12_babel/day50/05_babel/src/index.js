const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget);


// var from = require("core-js/es6/array.js").from;
require("core-js/modules/es6.array.from.js")
let divNodes = document.querySelectorAll("div");
var arr =Array.from(divNodes);
console.log(arr instanceof Array);
