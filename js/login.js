const loginForm = document.getElementById('login-form');
const logged = localStorage.getItem('loggedUser');
const init = () => {
  logged ? location.assign('users.html') : '';
};

loginForm.addEventListener('submit', () => {
  localStorage.setItem('loggedUser', "you're logged mate");
  location.assign('users.html');
});
window.addEventListener('DOMContentLoaded', init());
