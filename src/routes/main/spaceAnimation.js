//https://www.youtube.com/watch?v=Bed1z7f1EI4
//https://stackoverflow.com/questions/60935920/converting-three-js-geometry-into-buffergeometry

import * as THREE from 'three';

let scene, camera, renderer, stars, starGeo;
const vertex = new THREE.Vector3();
let velocites = []
let accelerations = []
let vertices = []

export default function init(elementId) {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI/2;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (document.getElementById(elementId).firstChild){
        document.getElementById(elementId).replaceChild(renderer.domElement, document.getElementById(elementId).childNodes[0]);
    } else {
        document.getElementById(elementId).appendChild(renderer.domElement);
    }

    starGeo = new THREE.BufferGeometry();

    for(let i = 0; i < 6000; i++) {

        velocites.push(0);
        accelerations.push(0.02);
        vertices.push(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
    }

    starGeo.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

    let sprite = new THREE.TextureLoader().load( 'star.png' );
    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 1,
        map: sprite,
        transparent: true,  // Enable transparency
        alphaTest: 0.5,      // Configure alpha testing (discard pixels with alpha less than this value)
        depthTest: true,
        depthWrite: false,
        sizeAttenuation: true
    });

    stars = new THREE.Points(starGeo,starMaterial);
    scene.add(stars);

    window.addEventListener("resize", onWindowResize, false);

    animate(); 
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    // starGeo.vertices.forEach(p => {
    // p.velocity += p.acceleration
    // p.y -= p.velocity;
    
    // if (p.y < -200) {
    //     p.y = 200;
    //     p.velocity = 0;
    // }
    // });
    // starGeo.verticesNeedUpdate = true;
    // stars.rotation.y +=0.002;

    // renderer.render(scene, camera);
    // requestAnimationFrame(animate);
    

    var positionAttribute = stars.geometry.getAttribute( 'position' );
	
    for ( var i = 0; i < positionAttribute.count; i ++ ) {
        vertex.fromBufferAttribute( positionAttribute, i );
        velocites[i] += accelerations[i] * 0.1
        vertex.y -= velocites[i] * 0.1;
        
        if (vertex.y < -200) {
            vertex.y = 400;
            velocites[i] = 0;
        }
        positionAttribute.setXYZ( i, vertex.x, vertex.y, vertex.z );
    }

    positionAttribute.needsUpdate = true;
    stars.rotation.y += 0.0017 * 0.2;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    
}