'use strict';

var createGreeting = function() {
  var today = new Date();
  var hourNow = today.getHours();
  var userName = prompt('Please enter your first name.');
  var greeting;

  if (hourNow > 18) {
    greeting = 'Good evening, ' + userName + ' . Welcome to Six Sigma Properties.';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon, ' + userName + ' . Welcome to Six Sigma Properties.';
  } else if (hourNow >= 0) {
    greeting = 'Good morning, ' + userName + ' . Welcome to Six Sigma Properties.';
  } else {
    greeting = 'Welcome to Six Sigma Properties';
  }
  return '<h3>'+ greeting + '</h3>';
};



var getItem = function (){

  var tour = prompt('Would you like to tour an apartment or townhouse?');
  var lowerCaseTour = tour.toLowerCase();
  var unitType;

  while (lowerCaseTour !== 'townhouse' && lowerCaseTour !== 'apartment'){
    unitType = prompt ('Please enter "townhouse" or "apartment".');
  }

  if (lowerCaseTour=== 'apartment') {
    unitType = '<img src="images/apartment1.png">';
  } else if (lowerCaseTour === 'townhouse') {
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


