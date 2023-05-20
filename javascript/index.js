const buttons = document.querySelectorAll('.button');
const submitButton = document.querySelector('.submit');

buttons.forEach(button => {
   button.addEventListener('mouseover', () => {
      button.classList.add('hover');
   });
   button.addEventListener('mouseout', () => {
      button.classList.remove('hover');
   });
});

submitButton.addEventListener('mousedown', () => {
   submitButton.classList.add('activeSubmit');
});
submitButton.addEventListener('mouseup', () => {
   submitButton.classList.remove('activeSubmit');
});

function handleRatingClick(event) {
   const selectedValue = event.target.value;
   const isActive = event.target.classList.contains('active');

   buttons.forEach(button => {
      const buttonValue = button.value;
      button.classList.toggle('active', buttonValue <= selectedValue && !isActive);
   });
   }

   buttons.forEach(button => {
   button.addEventListener('click', handleRatingClick);
   });


