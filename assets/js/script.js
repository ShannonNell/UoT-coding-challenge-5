var currentDayEl = document.querySelector("#currentDay");

//find current date and display
currentDayEl.textContent = moment().format("dddd, MMMM Do, YYYY");