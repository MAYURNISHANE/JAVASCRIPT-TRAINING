function formVal() {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    document.getElementById('Error').innerHTML = '';
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';

    if (name == '' && password == '') {
        document.getElementById('Error').innerHTML = 'Enter your Username  and Password';
    }
    else if (name == '') {
        document.getElementById('nameError').innerHTML = 'Enter your Username';
    }
    else if (password == '') {
        document.getElementById('passwordError').innerHTML = 'Enter your Password';
    }
    else if (password.length < 6) {
        document.getElementById('passwordError').innerHTML = 'Enter 6 digit password';
    }

    else {
        alert('successfuly Login')
    }
}