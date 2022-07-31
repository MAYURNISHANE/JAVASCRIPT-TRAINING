document.getElementById('firstname').innerHTML = sessionStorage.getItem('firstname');
document.getElementById('lastname').innerHTML = sessionStorage.getItem('lastname');
document.getElementById('username').innerHTML = sessionStorage.getItem('username');
document.getElementById('password').innerHTML = sessionStorage.getItem('password');
function logout(){
    sessionStorage.clear();
    location.href = 'session googleaccount.html';
}
