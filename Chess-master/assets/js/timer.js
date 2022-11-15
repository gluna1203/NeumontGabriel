const startingTime = 10;
let time = startingTime * 60;

const countDown = document.getElementById('counter');

setInterval(Update, 1000);

function Update() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds

    countDown.innerHTML = `Time Remaining: ${minutes}:${seconds}`;

    if (time == 0){
        document.getElementById('game').setAttribute("hidden", "hidden")
        time++;
        document.getElementById('TimeOut').innerHTML = "Game Time Out! Refresh to try again."
    }

    time--;
}