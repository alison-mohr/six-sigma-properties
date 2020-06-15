function passwordRemind() {

var attempts = 0;
var attemptsAllowed = 5;
var password = 's1xs16m@';
do {
  var input = prompt('Password incorrect, please try again. You have ' + (attemptsAllowed - attempts) + ' attempts remaining.').trim(); // trim will remove any accidental spaces typed at the beginning or end.
  attempts++;
} while(attempts < attemptsAllowed && input !== password)
if(attempts !== attemptsAllowed) {
  console.log('Welcome!');
} else {
  console.log('Failed attempt to login.');
}
}