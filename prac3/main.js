'use strict';

var counterEle = document.getElementById('js-counter');

function initCounter() {
  var counter = 0;
  return function incCounter(){
    return counter++;
  }
}

var counter1 = initCounter();

counterEle.innerText = counter1();