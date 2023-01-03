let mobilenet;
let video;
let label = '';


function modelReady() {
	console.log("Model is ready!!!");
}

function gotResults(error, results) {
	if (error) {
		console.error(error);
	} else {
		label = results[0].className;
		mobilenet.predict(gotResults);
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here
	video = createCapture(VIDEO);
	video.hide();
	background(0);
	mobilenet = ml5.featureExtractor('Mobilenet', gotResults)
}

function draw() {
	// put drawing code here
	background(0);
	image(video, 0, 0, 320, 240);
	fill(255);
	textSize(16);
	text(label, 10, height - 10);
}
