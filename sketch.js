var path,you,car1,car2,pollice
var pathImg,youImg,car1Img,car2Img,polliceImg,endImg
var distancetravelled = 0;
var car1Group,car2Group,polliceGroup

var PLAY = 1;
var END = 0;
var gameState = 1;

function preload(){
   pathImg = loadImage("Road.png")
   youImg = loadImage("you.png")
   car1Img = loadImage("car1.png")
   car2Img = loadImage("car2.png")
   polliceImg = loadImage("pollice")
   endImg = loadImage("gameOver.png")
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    path = createSprite(width/2,200);
    path.addImage(pathImg)
    path.velocityY = 4;

    you = createSprite(width/2,heigth-20,20,20);
    you.scale = 0.08;

    car1Group = new Group();
    car2Group = new Group();
    polliceGroup = new Group();



}

function draw() {
   
    if(gameState===PLAY){
        background(0);
        you.x = World.mouseX;

        edges = createEdgeSprite();
        you.collide(edges);
    }


    if(path.y > heigth ){
        path.y = heigth/2;
    }
    


    
    distancetravelled = distancetravelled + Math.round(frameCount/60);

     you.mouse.x = world.mouseX




    createCar1();
    createCar2();
    createPollice();

    if (car1.isTouching(you)){
        gameState = END;

        you.addAnimation("Driving",endImg);
        you.x = width/2;
        you.y = height/2;
        you.scale = 0.6;

        car1Group.destroyEach();
        car2Group.destroyEach();
        polliceGroup.destroyEach();

        car1Group.destroyEach(0);
        car2Group.destroyEach(0);
        polliceGroup.destroyEach(0);
    }
   
   
    if (car2.isTouching(you)){
        gameState = END;

        you.addAnimation("Driving",endImg);
        you.x = width/2;
        you.y = height/2;
        you.scale = 0.6;

        car1Group.destroyEach();
        car2Group.destroyEach();
        polliceGroup.destroyEach();

        car1Group.destroyEach(0);
        car2Group.destroyEach(0);
        polliceGroup.destroyEach(0);
    }
   
    if (pollice.isTouching(you)){
        gameState = END;

        you.addAnimation("Driving",endImg);
        you.x = width/2;
        you.y = height/2;
        you.scale = 0.6;

        car1Group.destroyEach();
        car2Group.destroyEach();
        polliceGroup.destroyEach();

        car1Group.destroyEach(0);
        car2Group.destroyEach(0);
        polliceGroup.destroyEach(0);
    }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    drawSprites();
   textSize(20);
   fill(255);
   text("Distance: "+ distancetravelled,width-150,30);
}






function createCar1(){
    if (World.frameCount % 200 == 0){
        var car1 = createSprite(Math.round(random(50,width-50),40,10,10));
        car1.addImage(car1Img)
        car1.scale = 0.12;
        car1.velocityY = 5;
        car1.lifetime = 200;
        car1Group.add(car1)
    }

}


function createCar2(){
    if (world.frameCount % 320 == 0){
        var car2 = createSprite(Math.round(random(50,width-50),40,10,10));
        car2.addImage(car2Img)
        car2.scale = 0.12;
        car2.velocityY = 5;
        car2.lifetime = 200;
        car2Group.add(car2)
    }
}

function createPollice(){
    if (world.frameCount % 410 == 0){
        var pollice = createSprite(Math.round(random(50,width-50),40,10,10))
        pollice.addImage(polliceImg)
        pollice.scale = 0.12;
        pollice.velocityY = 5;
        pollice.lifetime = 200;
        polliceGroup.add(pollice)
    }
}


