
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let addBtn = document.getElementById('add');
let add2Btn = document.getElementById('add2');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let startDate = Date.now()


startBtn.addEventListener('click', function () {
    timer = true;
    startDate = Date.now()
    stopWatch();
});
addBtn.addEventListener('click', function () { //hour
    startDate -= reverseCalcHours(1);
});
add2Btn.addEventListener('click', function () { //minute
    startDate -= reverseCalcHours(1 / 60);
});

resetBtn.addEventListener('click', function () {
    startDate = Date.now()
});

function stopWatch() {
    if (timer) {

        var mils = Date.now() - startDate;
        var hrs = calcHours(mils);

        let timeLeft = hrs;

        let hrString = Math.floor(timeLeft);
        timeLeft -= hrString;
        let minString = Math.floor(timeLeft * 60);
        timeLeft -= (minString / 60);
        let secString = Math.floor(timeLeft * 60 * 60);
        timeLeft -= ((secString / 60) / 60);
        let countString = Math.round(timeLeft * 60 * 60 * 100);


        if (hrString < 10) {
            hrString = "0" + hrString;
        }

        if (minString < 10) {
            minString = "0" + minString;
        }

        if (secString < 10) {
            secString = "0" + secString;
        }

        if (countString < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        document.getElementById("timebar").value = Math.min(((Date.now() - startDate) / reverseCalcHours(24)) * 10000, 10000)
        setTimeout(stopWatch, 10);


    }
}



function reverseCalcHours(milliseconds) {


    const seconds = 1000 * Number(milliseconds);
    const minute = seconds * 60;
    const hour = minute * 60;

    return hour;
}

function calcHours(hour) {

    const minute = Number(hour) / 60
    const seconds = minute / 60;
    const milliseconds = seconds / 1000;

    return milliseconds;
}