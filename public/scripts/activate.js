src = 'https://unpkg.com/three@0.126.0/build/three.js';

async function activateXR() {
  // Add a canvas element and initialize a WebGL context that is compatible with WebXR.
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  const gl = canvas.getContext('webgl', { xrCompatible: true });
  const scene = new THREE.Scene();
}
