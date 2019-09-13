var b = 0;
window.onload = function() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 500);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    var container = document.getElementById("eksperiment").appendChild(renderer.domElement);
    
    var mf = document.getElementById("zvuk");
    mf.play();
    mf.volume = 0.3;

    var svetlo = new THREE.DirectionalLight(0x404040, 10);
    svetlo.position.x = 200;
    svetlo.position.y = 100;
    svetlo.position.z = 50;
    scene.add(svetlo);

    var svetlo2 = new THREE.AmbientLight(0x404040); // ?
    
    camera.position.x = 100;
    camera.position.y = 200;
    camera.position.z = 500;
    scene.add(camera);

    var parameter = Math.floor(Math.random() * 1) + 3;
    var sphereGeometry = new THREE.SphereGeometry(parameter, 32, 32);
    var sphereMaterial = new THREE.MeshPhongMaterial({color: 0xdddddd});
    
    var object = new THREE.Object3D();
    scene.add(object);

    function nasumicno(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for(var i=0;i<100;i++) {
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(nasumicno(-250,250), nasumicno(-400,400), nasumicno(-150,150));
        object.add(sphere);
    }

    var geometry = new THREE.Geometry();
    for(var j=0;j<7000;j++) {
        var vertex = new THREE.Vector3();
        vertex.x = THREE.Math.randFloatSpread(2000);
        vertex.y = THREE.Math.randFloatSpread(2000);
        vertex.z = THREE.Math.randFloatSpread(2000);
        geometry.vertices.push(vertex);
    }

    var tackice = new THREE.Points(geometry, new THREE.PointsMaterial({color: 0x888888}));
    scene.add(tackice);


    function prikazi() {
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    }

    function pomeraj() {
        b += 1;
        requestAnimationFrame(pomeraj);
        if(b <= 50) {
            camera.position.z -= 10;
        } else if(b > 50 && b <= 120) {
            camera.position.z -= 1;
        } else if(b > 120 && b <= 170) {
            camera.position.y -= 7;
        } else if(b > 170 && b <= 200) {
            camera.position.y -= 1;
        } else if(b > 200 && b <= 250) {
            camera.position.x -= 5;
        } else if(b > 250 && b <= 280) {
            camera.position.x -= 1;
        } else if(b > 280 && b <= 330) {
            camera.position.z += 11;
            camera.position.y += 7;
            camera.position.z += 5;
        } else if(b > 330 && b <= 360) {
            camera.position.z += 1;
            camera.position.y += 1;
            camera.position.x += 1;
        } else if(b > 360 && b <= 370) {
            camera.position.z -= 1;
        } else if(b > 370 && b <= 420) {
            camera.position.z -= 15;
            camera.position.y -= 7;
        } else if(b > 420 && b <= 490) {
            camera.position.z -= 1;
            camera.position.y -= 1;
        } else if(b > 490 && b <= 540) {
            camera.position.y += 5;
            camera.position.x += 3;
        } else if(b > 540 && b <= 570) {
            camera.position.x += 1;
            camera.position.y += 1;
        } else if(b > 570 && b <= 620) {
            camera.position.x -= 7;
        } else if(b > 620 && b <= 650) {
            camera.position.x -= 1;
        } else if(b > 650 && b <= 700) {
            camera.position.y += 3;
            camera.position.z += 15;
            camera.position.x += 3;
        } else if(b > 700 && b <= 730) {
            camera.position.x += 3;
            camera.position.y -= 1;
            camera.position.z += 1;
        } else if(b > 730 && b <= 740) {
            camera.position.x += 2;
            camera.position.y += 1;
            camera.position.z -= 1;
        } else if(b > 750 && b <= 800) {
            camera.position.x -= 8;
            camera.position.y -= 5;
            camera.position.z -= 10;
        } else if(b > 800 && b <= 870) {
            camera.position.x -= 1;
            camera.position.z -= 1;
        } else if(b > 870 && b <= 920) {
            camera.position.x += 8;
            camera.position.z -= 6;
        } else if(b > 920 && b <= 950) {
            camera.position.x += 1;
            camera.position.y += 1;
        } else if(b > 950 && b <= 1000) {
            camera.position.x += 3;
            camera.position.z += 6;
        } else if(b > 1000 && b <= 1030) {
            camera.position.x -= 1;
            camera.position.z += 1;
        } else if(b > 1030 && b <= 1080) {
            camera.position.x += 2;
            camera.position.y += 4;
            camera.position.z += 10;
        } else if(b > 1080 && b <= 1110) {
            camera.position.x -= 5;
            camera.position.y += 2;
        } else if(b > 1110 && b <= 1120) {
            camera.position.x -= 3;
            camera.position.y += 2;
            camera.position.z -= 2;
        } else if(b > 1120 && b <= 1170) {
            camera.position.y -= 10;
            camera.position.z -= 10;
        } else if(b > 1170 && b <= 1240) {
            camera.position.y -= 1;
            camera.position.z -= 1;
        } else if(b > 1240 && b <= 1290) {
            camera.position.y += 10;
            camera.position.z -= 5;
        } else if(b > 1290 && b <= 1320) {
            camera.position.y += 1;
            camera.position.z -= 1;
        } else if(b > 1320 && b <= 1370) {
            camera.position.x -= 8;
            camera.position.z += 3;
        } else if(b > 1370 && b <= 1400) {
            camera.position.x -= 1;
            camera.position.z += 1;
        } else if(b > 1400 && b <= 1450) {
            camera.position.x += 8;
            camera.position.z += 13;
        } else if(b > 1450 && b <= 1480) {
            camera.position.x += 1;
            camera.position.y += 1;
            camera.position.z += 1;
        } else if(b > 1480 && b <= 1490) {
            camera.position.y += 1;
            camera.position.z -= 1;
        } else if(b > 1490) {
            cancelAnimationFrame(pomeraj);
            var h = Math.floor((Math.random() * 100) + 1);
            if(h >= 1 && h < 25) {
                b = 0;
            } else if(h >= 25 && h < 50) {
                b = 371;
            } else if(h >= 50 && h < 75) {
                b = 751;
            } else if(h >= 75 && h <= 99) {
                b = 1121;
            }
            
        }
        prikazi();
    }
    pomeraj();
}