// Three.jsのシーン、カメラ、レンダラーを設定
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
  window.innerWidth / -2, window.innerWidth / 2,
  window.innerHeight / 2, window.innerHeight / -2,
  1, 1000
);
camera.position.z = 500;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor('#000000'); // 背景色を黒に設定
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// リサイズイベントのハンドラ
window.addEventListener('resize', () => {
  camera.left = window.innerWidth / -2;
  camera.right = window.innerWidth / 2;
  camera.top = window.innerHeight / 2;
  camera.bottom = window.innerHeight / -2;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);

// 球体のジオメトリを作成
const geometry = new THREE.SphereGeometry(50, 32, 32); // ボールのサイズ

// 5個のボールを作成する関数
function createSpheres() {
  const spheres = [];
  for (let i = 0; i < 5; i++) {
    const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(Math.random() * 0xffffff) });
    const sphere = new THREE.Mesh(geometry, material);
    resetSphere(sphere);
    spheres.push(sphere);
    scene.add(sphere);
  }
  return spheres;
}

// 球体の位置をリセットする関数
function resetSphere(sphere) {
  sphere.position.x = Math.random() * window.innerWidth - window.innerWidth / 2;
  sphere.position.y = window.innerHeight / 2;
}

// 5個の球体を作成
const spheres = createSpheres();

// アニメーションを描画するための関数
function animate() {
  requestAnimationFrame(animate);

  spheres.forEach(sphere => {
    sphere.position.y -= 2; // 速度を調整
    if (sphere.position.y < -window.innerHeight / 2) {
      resetSphere(sphere);
    }
  });

  renderer.render(scene, camera);
}

// アニメーションの開始
animate();
