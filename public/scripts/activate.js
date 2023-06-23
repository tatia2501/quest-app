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

const postUser = async (name, password) => {
  return await fetch(`/user`, {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      password: password,
    }),
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

const checkUser = async (name) => {
  return await fetch(`user/check/${name}`).then(async function (response) {
    if (response.status !== 404) {
      alert(
        'Команда с таким названием уже существует, придумайте другое название.',
      );
    } else {
      const user = await postUser(
        input_name_new.value,
        input_password_new.value,
      );
      window.sessionStorage.setItem('user_code', user.user_code);
      window.sessionStorage.setItem('total_score', '0');
      window.sessionStorage.setItem(
        'start_time',
        String(Date.parse(new Date())),
      );
      window.location.href = '/ar';
    }
  });
};

start_btn.addEventListener('click', async () => {
  if (
    input_name_new.value === 'admin' &&
    input_password_new.value === 'itmo1900'
  ) {
    window.location.href = '/edit';
  } else {
    await checkUser(input_name_new.value);
  }
});

const getUser = async (name, password) => {
  return await fetch(`/user/${name}?password=${password}`).then((response) =>
    response.json(),
  );
};

const getRespUser = async (name, password) => {
  return await fetch(`/user/${name}?password=${password}`).then(async function (
    response,
  ) {
    if (response.status === 404) {
      alert('Название или пароль неверны, попробуйте еще раз');
    } else {
      const user = await getUser(
        input_name_old.value,
        input_password_old.value,
      );
      window.sessionStorage.setItem('user_code', user.user_code);
      window.sessionStorage.setItem('total_score', String(Number(user.score)));
      window.sessionStorage.setItem(
        'start_time',
        String(Date.parse(new Date())),
      );
      window.location.href = '/ar';
    }
  });
};

continue_btn.addEventListener('click', async () => {
  if (
    input_name_old.value === 'admin' &&
    input_password_old.value === 'itmo1900'
  ) {
    window.location.href = '/edit';
  } else {
    await getRespUser(input_name_old.value, input_password_old.value);
  }
});
