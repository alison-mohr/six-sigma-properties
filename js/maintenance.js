function myFunction() {
   
   
    alert(fname.value +"We will work on solving this problem soon.");

}


var msg = elUsername.value + '- Congratulations!! No RENT this month!';



(function(){
    var form= document.getElementById('login');
    var password = document.getElementById('pwd');
    var submit = document.getElementById ('submit')
    var elements = form.elements;
    var elUsername = elements.username;
    var elMain = document.getElementById ('main');
    addEvent (form, 'submit', function(e){
e.preventDefault();
var elements = this.elements; 
var elUsername = elements.username; 
var msg = elUsername.value + '- Congratulations!! No RENT this month!';
elMain.textContent = msg; 
document.getElementById('main').textContent = msg; 

});
}());

/*Prompt function to confirm choice 
function myFunction () {
    var txt;
    var person = prompt ("Please enter your Unit Number:", "Unit Number");
    if (person == null|| person == "") {
        txt = "Request not submitted.";
      } else {
        txt = "Thank you, " + person + ". We will work on solving this problem soon.";
      }
      document.getElementById("demo").innerHTML = txt;
    }
*/