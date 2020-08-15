'use strict';
//first thing to do
console.log('This file is connected');

function unitAvailability (){
//Greet the user using prompt
  var userName = prompt ('What is your name?');

  var bedroomCount = prompt('How many bedrooms would you like?');

  var availability;

  if(bedroomCount === '3' || bedroomCount === '2') {
    availability = userName + ', we have one unit available that should meet your needs. Please call 555-555-5555 for more information.';
  } else if(bedroomCount === '1'|| bedroomCount === '4') {
    availability = userName + ' , we do not have any available units at this time.';
  }
  else {
    alert('We only have 1, 2, 3, and 4 bedrroms available. Please refresh the page and try entering 1, 2, 3, or 4 to search for availability.');
    availability = userName + ' , we only have 1, 2, 3, and 4 bedrroms available. Please refresh the page and try entering 1, 2, 3, or 4 to search for availability.';
  }

  return '<h3 style="color:black; font-size: 30px; background-color:white;">' + availability + '</h3>';


}
