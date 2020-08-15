'use strict';
console.log('This file is connected and ready to run');


function greetingName(){


  var today = new Date();
  var hourNow = today.getHours();
  var userName = prompt('Please enter your first name.');
  var greeting;

  if (hourNow >= 18 && hourNow < 24) {
    greeting = 'Good evening, '+ userName + ' !';
  } else if (hourNow > 12 && hourNow <18) {
    greeting = 'Good afternoon, ' + userName + '.';
  }else if (hourNow > 0) {
    greeting = 'Good morning ' + userName;
  } else {
    greeting = 'Welcome to Six Sigma Properties!';
  }

  //return greeting;

  //or to add styling to return values
  return '<h1 style="color:yellow; font-size: 50px; background-color:blue;">' + greeting + '</h1>';



  //This will write to the page where ever your script tag is located.
  //document.write('<h1 style="color:yellow; font-size: 50px; background-color:blue;">' + greeting + '</h1>');

}
