function getCurrentTime() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning, Prima!";
    } else if (hour < 18) {
        greeting = "Good afternoon, Prima!";
    } else {
        greeting = "Good evening, Prima!";
    }

    const greetingText = document.getElementById("greeting-text");
    greetingText.textContent = greeting;
    const currentDate = document.getElementById("current-date");
    currentDate.textContent = now.toDateString();
    const currentTime = document.getElementById("current-time");
    currentTime.textContent = now.toLocaleTimeString();
}
setInterval(getCurrentTime, 1000);

getCurrentTime();