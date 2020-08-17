'use strict';
var createGreeting = function() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }

  return '<h3>'+ greeting + '</h3>';
};


var getItem = function (){

  var order = prompt('Would you like to tour an apartment or townhouse?');
  var item;

  while (order !== 'townhouse' && order !== 'apartment'){
    order = prompt ('Please enter "townhouse" or "apartment".');
  }

  if (order === 'apartment') {
    item = '<img src="images/apartment1.png">';
  } else if (order === 'townhouse') {
    item = '<img src="images/townhouse1.png">';
  }
  return item;
};

var howMany = function() {
  var count = prompt('How many units would you like to look at?');

  while( count === '' || isNaN(count) ) {
    count = prompt('Please enter a number. How many do you want?');
  }

  return Number(count);
};

var showOrder = function() {
  var item = getItem();
  var total = howMany();
  var result = '';
  //use this to make the number of house images display on screen
  for(var i = 0; i < total; i++) {
    result = result + '<p> Unit #' + i + ' ' + item + '</p>';
  }
 
  return result;
};
