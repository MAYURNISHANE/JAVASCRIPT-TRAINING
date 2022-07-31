document.getElementById('firstname').innerHTML=localStorage.getItem('firstname');
document.getElementById('lastname').innerHTML=localStorage.getItem('lastname');
document.getElementById('username').innerHTML=localStorage.getItem('username');
document.getElementById('password').innerHTML=localStorage.getItem('password');
function logout(){
    sessionStorage.clear();
    location.href = 'local googleaccount.html';
}
