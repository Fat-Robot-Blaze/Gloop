
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let addBtn = document.getElementById('add');
let add2Btn = document.getElementById('add2');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
addBtn.addEventListener('click', function () {
    hour++;
});
add2Btn.addEventListener('click', function () {
    minute++;
});
stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        document.getElementById("timebar").value = Math.min(((Number(hour) + (Number(minute) / 60)) / 24) * 10000, 10000)
        
        setTimeout(stopWatch, 10);


    }
}