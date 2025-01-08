document.addEventListener("DOMContentLoaded", () => {
    const timerDisplay = document.createElement("div");
    document.body.appendChild(timerDisplay);

    let countdown = 10;
    timerDisplay.textContent = countdown;

    const timer = setInterval(() => {
        countdown--;
        timerDisplay.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(timer);
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000);
});
