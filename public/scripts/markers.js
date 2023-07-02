const container = document.getElementById('edit_markers');
const markers_template = document.getElementById('markers_template');
const text_when_no_markers = document.getElementById('text_when_no_markers');

const getMarkers = async () => {
  return await fetch(`/marker`, { method: 'GET' }).then((response) =>
    response.json(),
  );
};

const deleteMarker = async (marker_id) => {
  await fetch(`/marker/${marker_id}`, { method: 'DELETE' });
};

const deleteAllMarkers = async () => {
  await fetch(`/marker`, { method: 'DELETE' });
};

const postMarker = async () => {
  await fetch(`/marker`, { method: 'POST' });
};

const changeMarker = async (marker_id, image, text) => {
  await fetch(`/marker/${marker_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      image: image,
      text: text,
    }),
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

async function getAllMarkers() {
  const data = (await getMarkers()).slice();
  container.innerHTML = '';
  let i = 0;
  for (const item of data) {
    const marker = markers_template.content.cloneNode(true);
    let image = marker.getElementById('edit_image');
    image.textContent = item.image;
    let text = marker.getElementById('edit_text');
    text.textContent = item.text;
    let edit_delete_btn = marker.getElementById('edit_delete_btn');
    edit_delete_btn.addEventListener('click', async () => {
      await deleteMarker(item.id);
      window.location.reload();
    });
    let edit_input_img = marker.getElementById('edit_input_img');
    let edit_btn_img = marker.getElementById('edit_btn_img');
    let edit_input_text = marker.getElementById('edit_input_text');
    let edit_btn_text = marker.getElementById('edit_btn_text');
    edit_btn_img.addEventListener('click', async () => {
      await changeMarker(item.id, edit_input_img.value, item.text);
      window.location.reload();
    });
    edit_btn_text.addEventListener('click', async () => {
      await changeMarker(item.id, item.image, edit_input_text.value);
      window.location.reload();
    });
    container.appendChild(marker);
    i++;
  }
  if (i === 0) {
    text_when_no_markers.textContent = 'Маркеров нет';
    edit_delete_all_btn.style.visibility = 'hidden';
  }
}

let edit_add_btn = document.getElementById('edit_add_btn');
edit_add_btn.addEventListener('click', async () => {
  await postMarker();
  window.location.reload();
});
let edit_delete_all_btn = document.getElementById('edit_delete_all_btn');
edit_delete_all_btn.addEventListener('click', async () => {
  await deleteAllMarkers();
  window.location.reload();
});

getAllMarkers();
