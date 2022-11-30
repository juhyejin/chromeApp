
const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const userNamePlace = document.querySelector('#login-form h1')

const HIDDEN_CLASS = 'hidden'

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    setUserName(userName)
    localStorage.setItem('userName', userName)
}

function setUserName(userName){
    userNamePlace.innerText = `Hello! ${userName}`
    userNamePlace.classList.remove(HIDDEN_CLASS)
    loginInput.classList.add(HIDDEN_CLASS)
}

loginForm.addEventListener('submit', onLoginSubmit)

const userNameInLocalStorage = localStorage.getItem('userName')

if(userNameInLocalStorage !== null){
   setUserName(userNameInLocalStorage)
}
