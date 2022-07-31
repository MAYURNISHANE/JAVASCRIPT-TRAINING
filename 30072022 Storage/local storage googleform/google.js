function next() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    document.getElementById('loginerror').innerHTML = '';
    document.getElementById('firstnameerror').innerHTML = '';
    document.getElementById('lastnameerror').innerHTML = '';
    document.getElementById('usernameerror').innerHTML = '';
    document.getElementById('passworderror').innerHTML = '';
    document.getElementById('confirmerror').innerHTML = '';

    if (firstname == '' && lastname == '' && username == '' && password == '' && confirm == '') {
        document.getElementById('loginerror').innerHTML = 'please enter above details';
    }
    else if (firstname == '') {
        document.getElementById('firstnameerror').innerHTML = 'please enter your first name';
    }
    else if (lastname == '') {
        document.getElementById('lastnameerror').innerHTML = 'please enter your last name';
    }
    else if (username == '') {
        document.getElementById('usernameerror').innerHTML = 'please enter your username';
    }
    else if (password == '') {
        document.getElementById('passworderror').innerHTML = 'please enter your password';
    }
    else if (password.length < 8) {
        document.getElementById('passworderror').innerHTML = 'please enter minimum 8 character password';
    }
    else if (confirm == '') {
        document.getElementById('confirmerror').innerHTML = 'please  confirm your password';
    }
    else {
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    location.href = 'Homelocal.html';
    }
}
