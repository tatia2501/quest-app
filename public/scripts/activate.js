const input_name_new = document.getElementById('input_name_new');
const input_password_new = document.getElementById('input_password_new');
const input_name_old = document.getElementById('input_name_old');
const input_password_old = document.getElementById('input_password_old');
const start_btn = document.getElementById('start_btn');
const continue_btn = document.getElementById('continue_btn');

function checkValue() {
  if (input_name_new.value === '' || input_password_new.value === '') {
    start_btn.style.background = 'lightgrey';
    start_btn.disabled = true;
  } else if (
    input_name_new.value === 'admin' &&
    input_password_new.value === 'itmo1900'
  ) {
    start_btn.style.background = '#ccee5c';
    start_btn.disabled = false;
  } else {
    start_btn.style.background = '#5cccee';
    start_btn.disabled = false;
  }

  if (input_name_old.value === '' || input_password_old.value === '') {
    continue_btn.style.background = 'lightgrey';
    continue_btn.disabled = true;
  } else if (
    input_name_old.value === 'admin' &&
    input_password_old.value === 'itmo1900'
  ) {
    continue_btn.style.background = '#ccee5c';
    continue_btn.disabled = false;
  } else {
    continue_btn.style.background = '#ee5ccc';
    continue_btn.disabled = false;
  }
}

checkValue();
input_name_new.addEventListener('input', checkValue);
input_password_new.addEventListener('input', checkValue);
input_name_old.addEventListener('input', checkValue);
input_password_old.addEventListener('input', checkValue);

start_btn.addEventListener('click', async () => {
  if (
    input_name_new.value === 'admin' &&
    input_password_new.value === 'itmo1900'
  ) {
    window.location.href = '/edit';
  } else window.location.href = '/ar';
});

continue_btn.addEventListener('click', async () => {
  if (
    input_name_old.value === 'admin' &&
    input_password_old.value === 'itmo1900'
  ) {
    window.location.href = '/edit';
  } else window.location.href = '/ar';
});
