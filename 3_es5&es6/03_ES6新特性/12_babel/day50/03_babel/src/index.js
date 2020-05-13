require('@babel/polyfill');
let divNodes = document.querySelectorAll("div");

var arr = Array.from(divNodes);
console.log(arr instanceof Array)