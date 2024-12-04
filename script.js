let countDown = document.getElementById("countdown");
let resetvalue = document.querySelector(".resetValue");
let startCount = 0;
let intervalid;

// function to start timer
const startTimer = () => {
  intervalid = setInterval(() => {
    countDown.innerText = startCount++;
  }, 1000);
};

// function to start timer on click

const stopTimer = () => {
    showStopValue()
  clearInterval(intervalid);
};

// function to reset timer on click

const resetTimer = () => {
  startCount = 0;
  countDown.innerText = startCount;
  clearInterval(intervalid);
};

//function to show value on click

const showStopValue = () => {
  const newPara = document.createElement("p");
  newPara.innerText = `The stop value is ${startCount - 1}`;
  resetvalue.append(newPara);
};

// function to clear time on click

const clearTimer = () => {
    startCount = 0;
  countDown.innerText = startCount;
  clearInterval(intervalid);
  resetvalue.innerHTML = "";
};

document.querySelector(".start-btn").addEventListener("click", startTimer);

document.querySelector(".reset-btn").addEventListener("click", resetTimer);

document.querySelector(".stop-btn").addEventListener("click", stopTimer);

document.querySelector(".getTime-btn").addEventListener("click", showStopValue);

document.querySelector(".clear-btn").addEventListener("click", clearTimer);
