const container = document.getElementById('edit_animations');
const animations_template = document.getElementById('animations_template');

const getAnimations = async () => {
  return await fetch(`/animation`, { method: 'GET' }).then((response) =>
    response.json(),
  );
};

const deleteAnimation = async (animation_id) => {
  await fetch(`/animation/${animation_id}`, { method: 'DELETE' });
};

const postAnimation = async () => {
  await fetch(`/animation`, { method: 'POST' });
};

const changeAnimation = async (animation_id, anim, position) => {
  await fetch(`/animation/${animation_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      animation: anim,
      position: position,
    }),
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  });
};

async function getAllMarkers() {
  const data = (await getAnimations()).slice();
  container.innerHTML = '';
  for (const item of data) {
    const animation = animations_template.content.cloneNode(true);
    let edit_animation = animation.getElementById('edit_animation');
    edit_animation.textContent = item.animation;
    let edit_position = animation.getElementById('edit_position');
    edit_position.textContent = item.position;
    let edit_delete_btn = animation.getElementById('edit_delete_btn_anim');
    edit_delete_btn.addEventListener('click', async () => {
      await deleteAnimation(item.id);
      window.location.reload();
    });
    let edit_input_anim = animation.getElementById('edit_input_anim');
    let edit_btn_anim = animation.getElementById('edit_btn_anim');
    let edit_input_pos = animation.getElementById('edit_input_pos');
    let edit_btn_pos = animation.getElementById('edit_btn_pos');
    edit_btn_anim.addEventListener('click', async () => {
      await changeAnimation(item.id, edit_input_anim.value, item.position);
      window.location.reload();
    });
    edit_btn_pos.addEventListener('click', async () => {
      await changeAnimation(item.id, item.animation, edit_input_pos.value);
      window.location.reload();
    });
    container.appendChild(animation);
  }
}

let edit_add_btn_anim = document.getElementById('edit_add_btn_anim');
edit_add_btn_anim.addEventListener('click', async () => {
  await postAnimation();
  window.location.reload();
});

getAllMarkers();
