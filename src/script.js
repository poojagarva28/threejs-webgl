import * as THREE from "three";

console.log(THREE);

const scene = new THREE.Scene();

// Red cube

const getometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const mesh = new THREE.Mesh(getometry, material);
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// mesh.position.normalize();
mesh.position.set(0.7, -0.6, 1);
mesh.scale.x = 0.2;
mesh.scale.y = 1.5;
mesh.scale.z = 1;
mesh.rotation.reorder("YXZ");
mesh.rotation.set(1, 0.3, 1);
scene.add(mesh);

console.log(mesh.position.length());

// axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Camera

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 1;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);
console.log(mesh.position.distanceTo(camera.position));

camera.lookAt(mesh.position);

// renderer

const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
