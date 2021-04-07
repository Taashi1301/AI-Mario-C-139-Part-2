function preload() {
	world_start = loadSound("world_start.wav");
	jump_sound= loadSound("jump.wav");
	gameover_sound= loadSound("gameover.wav");
	kick_sound= loadSound("kick.wav");
	mariodie_sound= loadSound("mariodie.wav");
	coin_sound= loadSound("coin.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}
function gotposes(results){
	if(results.length>0){
	  console.log(results);
	  noseX=results[0].pose.nose.x;
	  noseY=results[0].pose.nose.y;
	}
  }
  
  function modelLoaded(){
	console.log("model loaded");
  }
  
function draw() {
	game()
}






