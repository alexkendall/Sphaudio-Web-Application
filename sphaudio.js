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

function generateSphere(shape_no, x, y, z, color)
{

	// get position from x y z cordinates
	var position = x + " " + y + " " + z;

	// scene node
	var scene = document.getElementById("scene");
	scene.setAttribute("id", "scene");
}

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

	// time sensor
	var time_sensor = document.createElement("timeSensor");
	var time_sensor_id = shape_no + "time_route_id";
	time_sensor.setAttribute("id", time_sensor_id);
	time_sensor.setAttribute("DEF", "time");
	time_sensor.setAttribute("cycleInterval", "4");
	time_sensor.setAttribute("loop", "true");

	// position interpolator
	var pos_interpolator = document.createElement("PositionInterpolator");
	var pos_id = shape_no + "pos_int";
	pos_interpolator.setAttribute("id", pos_id);
	pos_interpolator.setAttribute("DEF", "move");
	pos_interpolator.setAttribute("key", "0 0.5 1");

	var frame_init = x + " 0 " + z;
	var frame_peak = x + " 15 " + z;
	var key_frames = frame_init + "  " + frame_peak + "  " + frame_init;
	pos_interpolator.setAttribute("keyValue", key_frames);

	// bind position interpolator to time sensor
	var pos_route = document.createElement("route");
	var pos_route_id = shape_no + "pos_route";
	pos_route.setAttribute("id", pos_route_id);
	pos_route.setAttribute("fromNode", "time");
	pos_route.setAttribute("fromField", "fraction_changed");
	pos_route.setAttribute("toNode", "move");
	pos_route.setAttribute("toField", "set_fraction");

	// bind sphere to position interpolator
	var time_route = document.createElement("route");
	var time_route_id = shape_no + "time_route";
	time_route.setAttribute("id", time_route_id);
	time_route.setAttribute("fromNode", "move");
	time_route.setAttribute("fromField", "value_changed");
	time_route.setAttribute("toNode", "ball");
	time_route.setAttribute("toField", "translation");

	// configure DOM tree for animation
	scene.appendChild(time_sensor);
	scene.appendChild(pos_interpolator);
	scene.appendChild(pos_route);
	scene.appendChild(time_route);
}

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

