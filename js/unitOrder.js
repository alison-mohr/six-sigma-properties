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

  var tour = prompt('Would you like to tour an apartment or townhouse?');
  var unitType;

  while (tour !== 'townhouse' && tour !== 'apartment'){
    unitType = prompt ('Please enter "townhouse" or "apartment".');
  }

  if (tour === 'apartment') {
    unitType = '<img src="images/apartment1.png">';
  } else if (tour === 'townhouse') {
    unitType = '<img src="images/townhouse1.png">';
  }
  return unitType;
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

  for(var i = 1; i <= total; i++) {
    result = result + '<p> Unit #' + i + ' ' + item + '</p>';
  }
  return result;
};


