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