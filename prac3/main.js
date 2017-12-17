'use strict';

var counterEle = document.getElementById('js-counter');

function initCounter() {
  var counter = 0;
  counterEle.innerHTML = counter;
  return function incCounter(){
    counterEle.innerHTML = counter + 1;
    console.log(counter);
    return ++counter;
  };
}

var counter1 = initCounter();

console.log(counter1);
//counterEle.innerHTML = counter1();