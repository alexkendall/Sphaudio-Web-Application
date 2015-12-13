 var sample_size = 200;
 var frequencyData = new Uint8Array(sample_size);
 var offset_y = 100;
//-----------------------------------------------------------------------

$(document).ready(function () {

  var songNumber = window.location.search.replace("?", "");
  if(songNumber == "4")
  {
      document.getElementById('audioElement').src = './audio/Odesza - Above The Middle.mp3';
  }
  if(songNumber == "5")
  {
      document.getElementById('audioElement').src = './audio/11 Particles of the Universe (Elysian Fields).mp3';
  }
  if(songNumber == "6")
  {
      document.getElementById('audioElement').src = './audio/Calvin Harris Disciples - How Deep Is Your Love.mp3';
  }
  if(songNumber == "7")
  {
      document.getElementById('audioElement').src = './audio/Coldplay - A Sky Full Of Stars (Official audio).mp3';
  }
  if(songNumber == "8")
  {
      document.getElementById('audioElement').src = './audio/Sorry - Justin Bieber.mp3';
  }
  if(songNumber == "9")
  {
      document.getElementById('audioElement').src = './audio/Martin Garrix - Forbidden Voices.mp3';
  }
  if(songNumber == "10")
  {
      document.getElementById('audioElement').src = './audio/Hozier-From Eden.mp3';
  }
  if(songNumber == "11")
  {
      document.getElementById('audioElement').src = './audio/The Beatles - Come Together.mp3';
  }
  if(songNumber == "12")
  {
      document.getElementById('audioElement').src = './audio/Beethoven -Symphony No 5.mp3';
  }
  if(songNumber == "13")
  {
      document.getElementById('audioElement').src = './audio/Kendrick Lamar - M.A.A.D. City.mp3';
  }
  if(songNumber == "14")
  {
    document.getElementById('audioElement').src = 'gone.m4a';
  }


  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var audioElement = document.getElementById('audioElement');
  var audioSrc = audioCtx.createMediaElementSource(audioElement);
  var analyser = audioCtx.createAnalyser();

  // Bind our analyser to the media element source.
  audioSrc.connect(analyser);
  audioSrc.connect(audioCtx.destination);

  // Continuously loop and update chart with frequency data.
  function fetch_audio_data() {
     requestAnimationFrame(fetch_audio_data);
     
     // Copy frequency data to frequencyData array.
     analyser.getByteFrequencyData(frequencyData);
    }
    
  // Run the loop
  fetch_audio_data();

});


    var scene, camera, renderer;
    var geometry, material, mesh;
    var num_spheres = 40;

    init();
    animate();

    function init() {

        scene = new THREE.Scene();
        var aspect_ratio = 0.3 / 0.7;
        camera =  new THREE.OrthographicCamera( window.innerWidth * -0.75, window.innerWidth * 0.75, window.innerHeight * 0.3, window.innerHeight * -0.3, 10, 10000);
        camera.position.z = 1500;
        camera.position.y = 300;
        camera.lookAt (new THREE.Vector3( 0, 0, 0 ));


        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize( window.innerWidth * 0.75, window.innerHeight * 0.3);
        document.getElementById("scene_container").appendChild( renderer.domElement );

        // enclose this in a div

        var increment = 50;
        var start_x = -1 * increment * num_spheres * 0.5;
        for(var i = 0; i < num_spheres; ++i)
        {
            // sphere geometry
            var sphere_radius = 15;
            var segments = 100;
            var rings = 100;
        
            // create the sphere's material
            var sphereMaterial =
            new THREE.MeshLambertMaterial(
            {
                color: 0x00B6FF
            });
            var sphere_geometry = new THREE.SphereGeometry(sphere_radius, segments,rings);

            // generate sphere
            var sphere = new THREE.Mesh(sphere_geometry,sphereMaterial);

            // name sphere
            sphere.name = "sphere" + i;

            // set casts shadows to true
            sphere.castShadow = true;
            sphere.receiveShadow = true;

            // set position
            var position = start_x + (increment * i);
            sphere.position.set(position, -1 * offset_y, 0);

            // add the sphere to the scene
            scene.add(sphere);

            // generate fllor
            var geometry = new THREE.BoxGeometry(10, 1, 1);
			      var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
			      var rect = new THREE.Mesh( geometry, material );
			      rect.position.set(position,-1 * offset_y,0);
			      rect.name = "rect" + i;
			      scene.add( rect );
        }

        // create a point light
        var pointLight =
        new THREE.PointLight(0xFFFFFF);

        // set its position
        pointLight.position.x = 0;
        pointLight.position.y = 100;
        pointLight.position.z = 100;
        pointLight.distance = 2000;

        // add to the scene
        //scene.add(pointLight);

        // create a spot light
        var spot_light = new THREE.SpotLight( 0xffffff );
        spot_light.position.set(0, 1000, 100);
        spot_light.castShadow = true;
        spot_light.shadowMapWidth = 1024;
        spot_light.shadowMapHeight = 1024;
        spot_light.shadowCameraNear = 10;
        spot_light.shadowCameraFar = 10000;
        spot_light.shadowCameraFov = 30;
        scene.add(spot_light);

        // create ambient light
        var ambient_light = new THREE.AmbientLight( 0x444444 ); // soft white light
        scene.add( ambient_light );

        // draw!
        renderer.render(scene, camera);

        // create floor
        var floor_material = new THREE.MeshLambertMaterial(
        {
            color: 0xf4f4f4
        });

    }


    function animate() {

      var c1,c2,c3,c4,c5;
      var themeNum = window.location.search.replace("?", "");
      if (themeNum == "1") {
        //console.log("theme 1");
        c1 = 0x35A8DC;
        c2 = 0x349396;
        c3 = 0xCFB028;
        c4 = 0xF4EF89;
        c5 = 0xE1094E;
      }
      else if (themeNum == "2") {
        //console.log("theme 2");
        c1 = 0xEEC438;
        c2 = 0xFC960F;
        c3 = 0xF7480E;
        c4 = 0xF7154D;
        c5 = 0xB10778;
      }
      else if (themeNum == "3") {
        //console.log("theme 3");
        c1 = 0x91C9C1;
        c2 = 0x3F90B5;
        c3 = 0x368992;
        c4 = 0x105B57;
        c5 = 0x608A82;
      }
      else {
        //console.log("no theme");
        c1 = 0x00B6FF;
        c2 = 0x00B6FF;
        c3 = 0x00B6FF;
        c4 = 0x00B6FF;
        c5 = 0x00B6FF;
      }

        for(var i = 0; i < num_spheres; ++i)
        {

            var name = "sphere" + i;
            var sphere_ = scene.getObjectByName(name);

            var rect_name = "rect" + i;
            var rect_ = scene.getObjectByName(rect_name);

            var span = (sample_size / num_spheres);
            var start_index = span * i;
            var end_index = start_index + span;
            var amp_sum = 0;

            for(var j = start_index; j < end_index; ++ j)
            {
                var amplitude = frequencyData[j];
                amp_sum += amplitude;

            }
            // set sphere and position
            var avg_amplitude = amp_sum / span;
            sphere_.position.set(sphere_.position.x, avg_amplitude - offset_y, sphere_.position.y);

            // set leading rectangle and position
            var ball_height = 30.0;
            rect_.scale.y = avg_amplitude;
            rect_.position.set(rect_.position.x, avg_amplitude * 0.5 - ball_height - offset_y, rect_.position.z);

            rect_.material.color.setRGB(avg_amplitude / 255.0,0.5,0);

            
            var modVal = (i+1)%5;
            if (modVal == 1) {
              sphere_.material.color.setHex(c1);
            }
            else if (modVal == 2) {
              sphere_.material.color.setHex(c2);
            }
            else if (modVal == 3) {
              sphere_.material.color.setHex(c3);
            }
            else if (modVal == 4) {
              sphere_.material.color.setHex(c4);
            }
            else if (modVal == 0) {
              sphere_.material.color.setHex(c5);
            }

        }
        requestAnimationFrame( animate );
        renderer.render( scene, camera );

    }

