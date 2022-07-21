function loginbutton() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    document.getElementById('loginerror').innerHTML = '';
    document.getElementById('usernameerror').innerHTML = '';
    document.getElementById('passworderror').innerHTML = '';
    if (username == '' && password == '') {
        document.getElementById('loginerror').innerHTML = 'please enter your username and password';
    }
    else if (username == '') {
        document.getElementById('usernameerror').innerHTML = 'please enter your username';
    }
    else if (password == '') {
        document.getElementById('passworderror').innerHTML = 'please enter your password';
    }
    else if (password.length < 6) {
        document.getElementById('passworderror').innerHTML = 'please enter minimum 6 digit in password';
    }
    else {
        document.getElementById('loginsuccess').innerHTML = 'you are successfully logged in'
    }
} 