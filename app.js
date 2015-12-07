var jitter = true;

//-----------------------------------------------------------------------

function generateBackdrop(scale, shape_no, x, y, z, color)
{
  // get position from x y z cordinates
  var position = x + " " + y + " " + z;

  // scene node
  var scene = document.getElementById("scene");
  scene.setAttribute("id", "scene");

  // configure transformation
  var trans = document.createElement("transform");
  var trans_id = shape_no + "trans";
  trans.setAttribute("id", trans_id);
  trans.setAttribute("DEF", "ball");
  trans.setAttribute("translation", position);
  trans.setAttribute("scale", scale);

  // configure shape
  var shape_node = document.createElement("shape");
  var shape_id = shape_no + "shape";
  shape_node.setAttribute("id", shape_id);

  // box node
  var box_node = document.createElement("box");
  var box_id = shape_no + "box";
  box_node.setAttribute("id", box_id);

  // app node
  var app_node = document.createElement("appearance");
  var app_id = shape_no + "app";
  app_node.setAttribute("id", app_id);

  // mat node
  var mat_node = document.createElement("material");
  var mat_id = shape_no + "mat";
  mat_node.setAttribute("id", mat_node);
  mat_node.setAttribute("diffuseColor", color);

  // configure DOM tree
  app_node.appendChild(mat_node);
  shape_node.appendChild(box_node);
  shape_node.appendChild(app_node);
  trans.appendChild(shape_node);
  scene.appendChild(trans);
}

//-----------------------------------------------------------------------

function generateSphere(shape_no, x, y, z, color)
{

  // get position from x y z cordinates
  var position = x + " " + y + " " + z;

  // scene node
  var scene = document.getElementById("scene");
  scene.setAttribute("id", "scene");

  // configure transformation
  var trans = document.createElement("transform");
  var trans_id = shape_no + "trans";
  trans.setAttribute("id", trans_id);
  trans.setAttribute("DEF", "ball");
  trans.setAttribute("translation", position);

  // configure shape
  var shape_node = document.createElement("shape");
  var shape_id = shape_no + "shape";
  shape_node.setAttribute("id", shape_id);

  // sphere node
  var sphere_node = document.createElement("sphere");
  var sphere_id = shape_no + "sphere";
  sphere_node.setAttribute("id", sphere_id);

  // app node
  var app_node = document.createElement("appearance");
  var app_id = shape_no + "app";
  app_node.setAttribute("id", app_id);

  // mat node
  var mat_node = document.createElement("material");
  var mat_id = shape_no + "mat";
  mat_node.setAttribute("id", mat_node);
  mat_node.setAttribute("diffuseColor", color);

  // configure DOM tree
  app_node.appendChild(mat_node);
  shape_node.appendChild(sphere_node);
  shape_node.appendChild(app_node);
  trans.appendChild(shape_node);
  scene.appendChild(trans);
}

//-----------------------------------------------------------------------

function set_position(shape_no, x, y, z)
{
     // get position from x y z cordinates
  var position = x + " " + y + " " + z;
  var trans_id = shape_no + "trans";
     var trans = document.getElementById(trans_id);
  trans.setAttribute("translation", position);
}

//-----------------------------------------------------------------------

$(document).ready(function () {

  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var audioElement = document.getElementById('audioElement');
  var audioSrc = audioCtx.createMediaElementSource(audioElement);
  var analyser = audioCtx.createAnalyser();

  // Bind our analyser to the media element source.
  audioSrc.connect(analyser);
  audioSrc.connect(audioCtx.destination);

  //var frequencyData = new Uint8Array(analyser.frequencyBinCount);
  var frequencyData = new Uint8Array(200);

  var svgHeight = '300';
  var svgWidth = '1200';
  var barPadding = '1';

  function createSvg(parent, height, width) {
    return d3.select(parent).append('svg').attr('height', height).attr('width', width);
  }

  var svg = createSvg('body', svgHeight, svgWidth);

  // Create our initial D3 chart.
  svg.selectAll('rect')
     .data(frequencyData)
     .enter()
     .append('rect')
     .attr('x', function (d, i) {
        return i * (svgWidth / frequencyData.length);
     })
     .attr('width', svgWidth / frequencyData.length - barPadding);

  // Continuously loop and update chart with frequency data.
  function renderChart() {


     requestAnimationFrame(renderChart);

     // Copy frequency data to frequencyData array.
     analyser.getByteFrequencyData(frequencyData);

    
    // get amplitude for each of 25 balls
    var precision = 200;
    var num_spheres = 25;
    var range = precision / num_spheres;

    for(var i = 0; i < 25; ++i)
    {
        // set start and end indexes
        var start_index = i * range;
        var end_index = start_index + range;
        var sum = 0;

        // sample points in range
        for(var i = start_index; i < end_index; ++i)
        {
          var this_point = frequencyData[i];
          sum += this_point;
        }
        //var avg_amplitude = sum / range * 0.05;
        set_position("0", "6", avg_amplitude, "3");
    }


/*
    if(jitter)
    {
        set_position("0", "6", "10", "3");
        jitter = false;
    }
    else
    {
        set_position("0", "6", "5", "3");
        jitter = true;
    }
*/
     // Update d3 chart with new data.
     svg.selectAll('rect')
        .data(frequencyData)
        .attr('y', function(d) {
           return svgHeight - d;
        })
        .attr('height', function(d) {
           return d;
        })
        .attr('fill', function(d) {
           return 'rgb(0, 150, ' + d + ')';
        });
      }

  // Run the loop
  renderChart();

});

//-----------------------------------------------------------------------

// first row of spheres
generateSphere("0", "6","0","3","green");
generateSphere("1", "3","0","3","green");
generateSphere("2", "0","0","3","green");
generateSphere("3", "-3","0","3","green");
generateSphere("4", "-6","0","3","green");

// second row of spheres
generateSphere("5", "6","0","6","green");
generateSphere("6", "3","0","6","green");
generateSphere("7", "0","0","6","green");
generateSphere("8", "-3","0","6","green");
generateSphere("9", "-6","0","6","green");

// third row of spheres
generateSphere("10", "6","0","15", "green");
generateSphere("11", "3","0","15", "green");
generateSphere("12", "0","0","15", "green");
generateSphere("13", "-3","0","15", "green");
generateSphere("14", "-6","0","15", "green");

// fourth row of spheres
generateSphere("15", "6","0","12","green");
generateSphere("16", "3","0","12","green");
generateSphere("17", "0","0","12","green");
generateSphere("18", "-3","0","12","green");
generateSphere("19", "-6","0","12","green");

// fifth row of spheres
generateSphere("20", "6","0","9","green");
generateSphere("21", "3","0","9","green");
generateSphere("22", "0","0","9","green");
generateSphere("23", "-3","0","9","green");
generateSphere("24", "-6","0","9","green");