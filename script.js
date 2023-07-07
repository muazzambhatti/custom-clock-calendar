let date = new Date();

setTime();

function setTime() {
    document.getElementById("hours_digit").innerText = date.getHours();
    document.getElementById("minutes_digit").innerText = date.getMinutes();
    document.getElementById("seconds_digit").innerText = date.getSeconds();
    setInterval(updateTime, 1000);
}

function updateTime() {
    let date = new Date();
    document.getElementById("hours_digit").innerText = date.getHours();
    document.getElementById("minutes_digit").innerText = date.getMinutes();
    document.getElementById("seconds_digit").innerText = date.getSeconds();
}