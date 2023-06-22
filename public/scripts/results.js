const results = document.getElementById('results');

const getUsers = async () => {
  return await fetch(`/user`, { method: 'GET' }).then((response) =>
    response.json(),
  );
};

const deleteUser = async (user_id) => {
  await fetch(`/user/${user_id}`, { method: 'DELETE' });
};

const deleteAll = async () => {
  await fetch(`/user`, { method: 'DELETE' });
};

async function getAllUsers() {
  const data = (await getUsers()).slice();
  for (const item of data) {
    let new_row = results.insertRow();

    let first_cell = new_row.insertCell(0);
    let first_text = document.createTextNode(item.name);
    first_cell.appendChild(first_text);

    let second_cell = new_row.insertCell(1);
    let second_text = document.createTextNode(item.score);
    second_cell.appendChild(second_text);

    let third_cell = new_row.insertCell(2);
    let delete_one_result_btn = document.createElement('button');
    delete_one_result_btn.setAttribute('id', 'delete_one_result_btn');
    delete_one_result_btn.textContent = 'удалить';
    third_cell.appendChild(delete_one_result_btn);

    delete_one_result_btn.addEventListener('click', async function () {
      await deleteUser(item.id);
      window.location.reload();
    });
  }
}

let results_delete_btn = document.getElementById('results_delete_btn');
results_delete_btn.addEventListener('click', async () => {
  await deleteAll();
  window.location.reload();
});

getAllUsers();
