'use strict';

var counterEle = document.getElementById('js-counter');

function initCounter() {
  var counter = 0;
  counterEle.innerHTML = counter;
  return function incCounter(){
    //Everytime we click we want to change the innerHTML of the element
    counterEle.innerHTML = counter + 1;
    //When the button is click, counter needs to be incremented
    //Bug: Having counter + 1 instead of ++counter;
    return ++counter;
  };
}

var counter1 = initCounter();