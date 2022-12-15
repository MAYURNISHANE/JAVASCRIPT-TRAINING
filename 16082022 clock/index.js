var sec = 0;
var min = 0;
var hr = 0;
var milisec = 0;
setInterval(function () {
    milisec++;

    if (milisec == 61) {
        milisec = 0;
        sec++;
    }
    if (sec == 61) {
        sec = 0;
        min++;
    }
    if (min == 61) {
        min = 0;
        hr++;
    }
    if (hr < 10) {
        document.getElementById('hour').innerHTML = '0' + hr;
    }
    else {
        document.getElementById('hour').innerHTML = hr;
    }
    if (min < 10) {
        document.getElementById('minute').innerHTML = '0' + min;
    }
    else {
        document.getElementById('minute').innerHTML = min;
    }
    if (sec < 10) {
        document.getElementById('second').innerHTML = '0' + sec;
    }
    else {
        document.getElementById('second').innerHTML = sec;
    }
    if (milisec < 10) {
        document.getElementById('milisecond').innerHTML = '0' + milisec;
    }
    else {
        document.getElementById('milisecond').innerHTML = milisec;
    }

}, 100)