import { data } from './data.js';

const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');
const details = document.querySelectorAll('.details');
const buttons = document.querySelectorAll('.btn')

function handleDays(data) {
  details.forEach((detail, index) => {
    const hours = detail.querySelector('.hours');
    const lastWeek = detail.querySelector('.last-week');

    if (data[index]) {
      hours.textContent = data[index].timeframes.daily.current + 'hrs';
      lastWeek.textContent = `Yesterday - ${data[index].timeframes.daily.previous}hrs`;
    }
  });

  turnOffPreviousState()
}

function handleWeeks(data) {
  details.forEach((detail, index) => {
    const hours = detail.querySelector('.hours');
    const lastWeek = detail.querySelector('.last-week');

    if (data[index]) {
      hours.textContent = data[index].timeframes.weekly.current + 'hrs';
      lastWeek.textContent = `Last week - ${data[index].timeframes.weekly.previous}hrs`;
    }
  });

  turnOffPreviousState()
}

function handleMonths(data) {
  details.forEach((detail, index) => {
    const hours = detail.querySelector('.hours');
    const lastWeek = detail.querySelector('.last-week');

    if (data[index]) {
      hours.textContent = data[index].timeframes.monthly.current + 'hrs';
      lastWeek.textContent = `Last month - ${data[index].timeframes.monthly.previous}hrs`;
    }
  });

  turnOffPreviousState()
}

function turnOffPreviousState() {
  const previous = document.querySelector('.active');
  if (previous) {
    previous.classList.remove('active');
  }
}



daily.addEventListener('click', () => handleDays(data))
weekly.addEventListener('click', () => handleWeeks(data))
monthly.addEventListener('click',() => handleMonths(data))

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('active')) {
      turnOffPreviousState();
  
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
    })
  });