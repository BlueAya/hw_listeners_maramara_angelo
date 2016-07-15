// var submitBtn = document.getElementById('submit');
// var firstName = document.getElementById('firstname');
// var lastName = document.getElementById('lastname');
// var email = document.getElementById('email');
// var message = document.getElementById('message');
//
// submitBtn.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('The firstName is: ' + firstName.value);
//     console.log('The lastName is: ' + lastName.value);
//     console.log('The email is: ' + email.value);
//     console.log('The message is: ' + message.value);
// });

var form = document.getElementById('form');
var firstName = document.getElementById('firstname');
var lastName = document.getElementById('lastname');
var email = document.getElementById('email');
var message = document.getElementById('message');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('The firstName is: ' + firstName.value);
    console.log('The lastName is: ' + lastName.value);
    console.log('The email is: ' + email.value);
    console.log('The message is: ' + message.value);
});
