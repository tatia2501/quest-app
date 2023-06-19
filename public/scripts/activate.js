const input = document.getElementById('input');
const start_btn = document.getElementById('start_btn');

function checkValue() {
  if (input.value === '') {
    start_btn.style.background = 'lightgrey';
    start_btn.disabled = true;
  } else if (input.value === 'itmo1900') {
    start_btn.style.background = 'pink';
    start_btn.disabled = false;
  } else {
    start_btn.style.background = 'lightblue';
    start_btn.disabled = false;
  }
}

checkValue();
input.addEventListener('input', checkValue);

start_btn.addEventListener('click', async () => {
  if (input.value === 'itmo1900') {
    window.location.href = '/edit';
  } else window.location.href = '/ar';
  // } else await activateXR();
});
