import * as THREE from 'three';

async function activateXR() {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  const gl = canvas.getContext('webgl', { xrCompatible: true });

  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    preserveDrawingBuffer: true,
    canvas: canvas,
    context: gl,
  });
  renderer.autoClear = false;

  const camera = new THREE.PerspectiveCamera();
  camera.matrixAutoUpdate = false;

  const session = await navigator.xr.requestSession('immersive-ar');
  session.updateRenderState({
    baseLayer: new XRWebGLLayer(session, gl),
  });

  const referenceSpace = await session.requestReferenceSpace('local');

  const onXRFrame = (time, frame) => {
    session.requestAnimationFrame(onXRFrame);

    gl.bindFramebuffer(
      gl.FRAMEBUFFER,
      session.renderState.baseLayer.framebuffer,
    );

    const pose = frame.getViewerPose(referenceSpace);
    if (pose) {
      const view = pose.views[0];

      const viewport = session.renderState.baseLayer.getViewport(view);
      renderer.setSize(viewport.width, viewport.height);

      camera.matrix.fromArray(view.transform.matrix);
      camera.projectionMatrix.fromArray(view.projectionMatrix);
      camera.updateMatrixWorld(true);

      renderer.render(scene, camera);
    }
  };
}

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
  } else await activateXR();
});
