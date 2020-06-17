'use strict';
//first thing to do
console.log('This file is connected');

//Greet the user using prompt
var userName = prompt ('What is your name?');
console.log(userName);
alert('Hello,' + userName + '! Welcome to Six Sigma Properties.');

//prompt our user for five yes or no questions
var bedroomCount = prompt('How many bedrooms would you like?');
console.log(bedroomCount);

if(bedroomCount === '3' || bedroomCount === '2') {
  console.log('We do have units available for rent that should meet your needs.');
  alert('We do have units available for rent that should meet your needs.');
} else if(bedroomCount === '1'|| lowerCaseFood === '4') {
  console.log ('We do not have any available units at this time.');
  alert('Incorrect, I love ice cream.');
}
else {
  console.log ('The maximum number of bedrooms we have is 4. Please input your selection using the numbers 1,2,3, or 4.');
  alert('The maximum number of bedrooms we have is 4. Please input your selection using the numbers 1,2,3, or 4.');
}

var apartmentRequest = prompt('Please add any other requests that you would help us find you the perfect place.');
console.log(apartmentRequest);

var userEmail = prompt('Thank you for that information' + userName + '. Please include type your email and one of our agents will get back to you soon.');
console.log(userEmail);

alert('Thank you! Have a nice day,' + userName +'!');
