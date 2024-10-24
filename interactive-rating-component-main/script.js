const buttons = document.querySelectorAll('.number');
const submit = document.querySelector('.submit');
const container = document.querySelector('.container');
const info = document.querySelector('.submit-info')
let number = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    number = button.textContent;
    if (!button.classList.contains('clicked')) {
      turnOffPreviousButton();
  
      button.classList.add('clicked');
    } else {
      button.classList.remove('clicked');
    }
    })
  });

submit.addEventListener('click', () => {

  if(number === ''){
    info.textContent = 'Choose number to give a feedback!';
  } else {
    info.textContent = '';
    container.innerHTML = `<div class="thankyou"><img src="images/illustration-thank-you.svg" alt="thankyou"></div>
    <p class="selected">You selected ${number} out of 5</p>
    <p class="second">Thank you!</p>
    <p class="info">We appreciate you taking the time to give a rating. If you ever need more support, 
      don't hesitate to get in touch!</p>`;
  container.classList.add('center');
  }

  
})

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.clicked');
  if (previousButton) {
    previousButton.classList.remove('clicked');
  }
}