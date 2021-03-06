//CONTROLS
var clock = new THREE.Clock();
// - Globas
    shadowType = 0;
    time = 0;
    speed = 0;
    n = 1000000; //debris for ring
// - Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    	renderer.setSize( window.innerWidth, window.innerHeight );
    	renderer.setClearColor(0x222222, 0);
    scene = new THREE.Scene();
// -Camera
    ratio = window.innerWidth/window.innerHeight;
    near = 1;
    far = 20000;
    camera = new THREE.PerspectiveCamera( 75, ratio, near, far );
        camera.position.x = -285;
        camera.position.y = 15;
        camera.position.z = -115;
// -Texture
    textureLoader = new THREE.TextureLoader();
    controls = new THREE.OrbitControls( camera, renderer.domElement );

function render() {
	stats.begin();
    //update orbit controls
	controls.update();
    //update camera info on screen
    updateCameraInfo();
    //render the scene
	renderer.render(scene, camera);
	requestAnimationFrame(render);

    saturn.rotation.y -= speed ;

    time += 0.00001;

    saturnUniforms.time.value += 0.3*speed;
    titanoUniforms.time.value += 0.8*speed;
    internalRingUniforms.time.value += 0.55*speed;
    externalRingUniforms.time.value += 0.55*speed;

    internalRingUniforms.shadowType.value = shadowType;
    externalRingUniforms.shadowType.value = shadowType;
    
    stats.end();

} 

