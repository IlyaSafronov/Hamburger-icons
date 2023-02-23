'use strict';
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentState = button.getAttribute('data-state');

    if(!currentState || currentState === 'closed') {
      button.setAttribute('data-state', 'opened');
      button.setAttribute('aria-expanded', 'true');
    } else {
      button.setAttribute('data-state', 'closed');
      button.setAttribute('aria-expanded', 'false');
    }
  });
});


// const buttonThree = document.querySelector('.button-three');

// buttonThree.addEventListener('click', () => {
//   const currentState = buttonThree.getAttribute('data-state');
//   const isOpened = buttonThree.getAttribute('aria-expanded');
//   if(isOpened === 'false') {
//     buttonThree.setAttribute('aria-expanded', 'true');
//   } else {
//     buttonThree.setAttribute('aria-expanded', 'false');
//   }
// })