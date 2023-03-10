let mobilenet;
let classifier;
let video;
let label = '';


function modelReady() {
	console.log("Model is ready!!!");
}

function videoReady() {
	console.log("Video is ready!!!");
}



function gotResults(error, results) {
	if (error) {
		console.error(error);
	} else {
		label = results[0].className;
		mobilenet.predict(gotResults);
		classifier.classify(gotResults);
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here
	video = createCapture(VIDEO);
	video.hide();
	background(0);
	mobilenet = ml5.featureExtractor('Mobilenet', gotResults);
	classifier = mobilenet.classification(video, videoReady)
}

function draw() {
	// put drawing code here
	background(0);
	image(video, 0, 0, 320, 240);
	fill(255);
	textSize(16);
	text(label, 10, height - 10);
}
