'use strict';

function addNum(num) {
  return function addNum2(num2) {
    return num + num2;
  };
}

function addSix() {
  var six = 6;
  return function addNum(num) {
    return num + six;
  };
}

//Closures with proper naming
function createBase(baseNum) {
  return function (num) {
    return baseNum + num;
  };
}

var firstNum = addNum(2);
var secondNum = firstNum(3);

//Result: 5
console.log(secondNum);

var six = addSix();
var num = six(10);

//Result: 16
console.log(num);

//Result: 15
var addTen = createBase(10);
console.log(addTen(5));