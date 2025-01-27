const targetDate = new Date("2025-02-01T23:59:59");

function Countdown() {
    const currentDate = new Date();
    const product_time = targetDate - currentDate;

    if (product_time <= 0) {
        document.querySelector("#days h2").innerHTML= "0";
        document.querySelector("#hours h2").innerHTML = "0";
        document.querySelector("#minutes h2").innerHTML = "0";
        document.querySelector("#seconds h2").innerHTML = "0";
        clearInterval(countdownInterval); 
        return;
    }

    const day = Math.floor(product_time / (1000 * 60 * 60 * 24));
    const hour = Math.floor((product_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((product_time % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((product_time % (1000 * 60)) / 1000);

    document.querySelector("#days h2").innerHTML = day;
    document.querySelector("#hours h2").innerHTML = hour;
    document.querySelector("#minutes h2").innerHTML = minute;
    document.querySelector("#seconds h2").innerHTML = second;
}


const countdownInterval = setInterval(Countdown, 1000);
Countdown();