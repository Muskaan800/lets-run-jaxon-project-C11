var man,man_running,path
function preload(){
     //pre-load images
  man_running=loadAnimation("Runner-1.png","Runner-2.png");
   path=loadAnimation("path.png")
}

function setup(){
  
}

//code to reset the background
if(path.y > 400){
  path.y = height/2;
}

function draw() {
  background('white');

}
