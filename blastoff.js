// made exercises from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
document.addEventListener('DOMContentLoaded', function () {
    
    function startCountdown() {

        const output = document.getElementById('output');
        for (let countdown = 10; countdown >= 0; countdown -= 1) {
            const para = document.createElement('p');
            output.appendChild(para);
            
            if (countdown === 0) {
                para.textContent = "Blast off!";
            }
            else if (countdown === 10) {
                para.textContent = "Countdown 10";
            }
            else {
                para.textContent = countdown.toString();
            }
        }
    }

    const startButton = document.getElementById("start-button");

    startButton.addEventListener("click", startCountdown);

    startButton.addEventListener("keypress", (event) => {
        var key = event.key;
        console.log(key);
    });
});
