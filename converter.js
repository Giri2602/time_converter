let convertBtnEl = document.getElementById("convertBtn");
let hoursIdEl = document.getElementById("hoursInput");
let minutesEl = document.getElementById("minutesInput");
let paraId = document.getElementById("errorMsg");
let timeInSec = document.getElementById("timeInSeconds");
timeInSec.classList.add("style")
paraId.classList.add("parastyle")
convertBtnEl.onclick = function() {
    if (hoursIdEl.value === "") {
        paraId.textContent = "Please Enter a valid number of hours."
    } else if (minutesEl.value === "") {
        paraId.textContent = "Please Enter a valid number of minutes.";
    } else {
        let hours = parseInt(hoursIdEl.value);
        let minutes = parseInt(minutesEl.value);

        if (isNaN(hours) || isNaN(minutes) || hours < 0 || minutes < 0) {
            paraId.textContent = "Please enter positive integer values for both hours and minutes.";
            timeInSec.textContent = "";
        } else {
            paraId.textContent = "";
            let seconds = hours * 3600 + minutes * 60;
            timeInSec.textContent = seconds + " Sec";
            timeInSec.classList.remove("d-none");
        }
    }
}