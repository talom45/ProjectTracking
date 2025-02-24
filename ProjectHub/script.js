console.log ('JavaScript file loaded')//this line is to check if the javascript file is running correctly and to check for errors
//this javascript is for the signup page
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerationLink = document.querySelector('.registeration-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');


registerationLink.addEventListener('click',()=> {
  wrapper.classList.add('active');
} );

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
} );

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
} );

iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
} );











//CONTENT MYNAV

/*//Assume 'userInput' is the ID of the input field where the user enters their username
const usernameInput = document.getElementById('usernameInput');
const usernameDisplay = document.getElementById('username');

//Update username
function updateUsername(){
    const username = usernameInput.value;
    usernameDisplay.textContent = `Username: ${username}`;}

    //call the updated usernamme
    document.getElementById('loginForm').addEventListener('submit',updateUsername);
*/


