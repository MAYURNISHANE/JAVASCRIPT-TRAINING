function loginbutton() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var address = document.getElementById('address').value;
    var state = document.getElementById('state').value;
    document.getElementById('loginerror').innerHTML = '';
    document.getElementById('usernameerror').innerHTML = '';
    document.getElementById('emailerror').innerHTML = '';
    document.getElementById('numbererror').innerHTML = '';
    document.getElementById('addresserror').innerHTML = '';
    document.getElementById('stateerror').innerHTML = '';
    if (username == '' && email == '' && address == '' && number == '' && state == '') {
        document.getElementById('loginerror').innerHTML = 'please enter your details';
    }
    else if (username == '') {
        document.getElementById('usernameerror').innerHTML = 'please enter your name';
    }
    else if (email == '') {
        document.getElementById('emailerror').innerHTML = 'please enter your email';
    }
    else if (number == '') {
        document.getElementById('numbererror').innerHTML = 'please enter your number';
    }
    else if (number.length < 10) {
        document.getElementById('numbererror').innerHTML = 'please enter minimum 10 digit in number';
    }
    else if (address == '') {
        document.getElementById('addresserror').innerHTML = 'please enter your address';
    }
    else if (state == '') {
        document.getElementById('stateerror').innerHTML = 'please enter your state';
    }
    else {
        document.getElementById('loginsuccess').innerHTML = 'you are successfully registered'
    }
} 