'use strict';

//prints 3 3 times
//TO FIX: pass i as the argument and call it
for(var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000 + i);
}