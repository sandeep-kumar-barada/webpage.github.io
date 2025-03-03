// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 3D Animation with Three.js
(function() {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75, // Field of view
        window.innerWidth / 500, // Aspect ratio (matching container height)
        0.1, // Near clipping plane
        1000 // Far clipping plane
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, 500); // Width, Height
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background
    const container = document.getElementById('threejs-container');
    container.appendChild(renderer.domElement);

    // Responsive Design
    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize() {
        camera.aspect = window.innerWidth / 500;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, 500);
    }

    // Controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth controls
    controls.dampingFactor = 0.05;

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Geometry and Materials
    // Cube
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshStandardMaterial({
        color: 0x4CAF50,
        metalness: 0.5,
        roughness: 0.1,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
        color: 0xff5722,
        metalness: 0.5,
        roughness: 0.1,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = -2;
    scene.add(sphere);

    // Torus
    const torusGeometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
        color: 0x2196F3,
        metalness: 0.5,
        roughness: 0.1,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.x = 2;
    scene.add(torus);

    // Particle System
    const particleCount = 2000;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.05,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Camera Position
    camera.position.z = 5;

    // Animation Function
    function animate() {
        requestAnimationFrame(animate);

        // Cube Rotation
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // Sphere Rotation
        sphere.rotation.y += 0.02;

        // Torus Rotation
        torus.rotation.x += 0.01;
        torus.rotation.z += 0.01;

        // Particle Animation
        particles.rotation.y += 0.001;

        // Update controls
        controls.update();

        renderer.render(scene, camera);
    }

    animate();

    // 3D Text
    const loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        const textGeometry = new THREE.TextGeometry('Welcome!', {
            font: font,
            size: 1,
            height: 0.2,
            curveSegments: 12,
        });
        const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffea00 });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-3, -2, 0);
        scene.add(textMesh);

        // Animate Text
        function animateText() {
            requestAnimationFrame(animateText);
            textMesh.rotation.y += 0.01;
        }
        animateText();
    });

})();
// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threejs-container').appendChild(renderer.domElement);

// Add a rotating cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Add OrbitControls for better interaction
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Add damping (inertia) to controls
controls.dampingFactor = 0.25;
controls.enableZoom = false;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update(); // Required if damping enabled

    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
// <!-- Custom JavaScript -->
<script src="script.js"></script>
