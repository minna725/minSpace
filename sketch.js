let bullets = []
let bulletnr = 0
let aliensLine1 = []
let aliensLine2 = []

let ship_0, ship_1, ship_2;

function preload(){
  //  alien_0=loadImage("ressources/alien_0")
  //alien_1 = loadImage("ressources/alien_1.png");
   ship_0 = loadImage("ressources/ship_0.png");
    //ship_1 = loadImage("ressources/ship_1.png");
    //ship_2 = loadImage("ressources/ship_2.png");
}


function setup() 
{
	createCanvas(400, 400);
    background(0);
    ship=new ship(200,200)

}

function draw(){
    
    ship.draw()
}


class ship{
    constructor(x,y){
    this.x=x;
    this.y=y;
}
move(){
    ship.move()
    if (keyIsDown(LEFT_ARROW)){
        this.x-=5;
    }
    if (keyIsDown(RIGHT_ARROW)){
        this.x+=5;
    }
    

}

draw(){
    
    image(ship_0 , 300,300)

}

}