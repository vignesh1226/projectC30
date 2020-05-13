const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score=0;

function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ballgreen(400,100,50);
    ball2 = new Ballred(200,375,50);
    ball3 = new Ballblack(120,375,35);
    ball4 = new Ballyellow(30,375,20);
    ballholder = new Ground(390,170,30,20)

    ground = new Ground(500,380,1000,20);
    box1 = new Box(680,350,40,40);
    box2 = new Box(740,350,40,40);
    box3 = new Box(800,350,40,40);
    box4 = new Box(860,350,40,40);
    box5 = new Box(920,350,40,40);
    box6 = new Box(710,310,40,40);
    box7 = new Box(770,310,40,40);
    box8 = new Box(830,310,40,40);
    box9 = new Box(890,310,40,40);
    box10 = new Box(740,270,40,40);
    box11 = new Box(800,270,40,40);
    box12 = new Box(860,270,40,40);
    box13 = new Box(770,230,40,40);
    box14 = new Box(830,230,40,40);
    box15 = new Box(800,190,40,40);
    
    ground1 = new Ground(800,160,340,20);
    box16 = new Box(650,130,40,40);
    box17 = new Box(710,130,40,40);
    box18 = new Box(770,130,40,40);
    box19 = new Box(830,130,40,40);
    box20 = new Box(890,130,40,40);
    box21 = new Box(950,130,40,40);
    box22 = new Box(680,90,40,40);
    box23 = new Box(740,90,40,40);
    box24 = new Box(860,90,40,40);
    box25 = new Box(920,90,40,40);
    box26 = new Box(710,50,40,40);
    box27 = new Box(890,50,40,40);

    chain = new Slingshot(ball1.body,{x:400,y:100});
    
    score = 0;
}

function draw(){
    background(255);
    Engine.update(engine);
    
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ballholder.display();

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    
    ground1.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();

    chain.display();

    if(box1.visibility === 0){
        score = score + 1;
    }
    if(box2.visibility === 0){
        score = score + 1;
    }
    if(box3.visibility === 0){
        score = score + 1;
    }
    if(box4.visibility === 0){
        score = score + 1;
    }
    if(box5.visibility === 0){
        score = score + 1;
    }
    if(box6.visibility === 0){
        score = score + 1;
    }
    if(box7.visibility === 0){
        score = score + 1;
    }
    if(box8.visibility === 0){
        score = score + 1;
    }
    if(box9.visibility === 0){
        score = score + 1;
    }
    if(box10.visibility === 0){
        score = score + 1;
    }
    if(box11.visibility === 0){
        score = score + 1;
    }
    if(box12.visibility === 0){
        score = score + 1;
    }
    if(box13.visibility === 0){
        score = score + 1;
    }
    if(box14.visibility === 0){
        score = score + 1;
    }
    if(box15.visibility === 0){
        score = score + 1;
    }
    if(box16.visibility === 0){
        score = score + 1;
    }
    if(box17.visibility === 0){
        score = score + 1;
    }
    if(box18.visibility === 0){
        score = score + 1;
    }
    if(box19.visibility === 0){
        score = score + 1;
    }
    if(box20.visibility === 0){
        score = score + 1;
    }
    if(box21.visibility === 0){
        score = score + 1;
    }
    if(box22.visibility === 0){
        score = score + 1;
    }
    if(box23.visibility === 0){
        score = score + 1;
    }
    if(box24.visibility === 0){
        score = score + 1;
    }
    if(box25.visibility === 0){
        score = score + 1;
    }
    if(box26.visibility === 0){
        score = score + 1;
    }
    if(box27.visibility === 0){
        score = score + 1;
    }
    stroke("white");
    textSize(16);
    textFont("Times New Roman");
    text("Score: "+ score, 500,50);

    stroke("white");
    textSize(19);
    textFont("Times New Roman");
    text("PRESS ENTER TO PLAY THE GREEN BALL",10,150);
    text("PRESS SPACE TO PLAY THE RED BALL",10,190);
    text("PRESS SHIFT TO PLAY THE BLACK BALL",10,230);
    text("PRESS ALT TO PLAY THE YELLOW BALL",10,270);
    
}
function keyPressed(){
    if(keyCode === ENTER){
        chain.attach(ball1.body);
        Matter.Body.setPosition(ball1.body,{x:400,y:100});
    }
    if(keyCode === 32){
        chain.reattach(ball2.body);
        Matter.Body.setPosition(ball2.body,{x:400,y:100});
     }
    if(keyCode === SHIFT){
        chain.join(ball3.body);
        Matter.Body.setPosition(ball3.body,{x:400,y:100});
    }
    if(keyCode === ALT){
        chain.rejoin(ball4.body);
        Matter.Body.setPosition(ball4.body,{x:400,y:100});
    }
}

function mouseDragged(){
    if(keyCode === ENTER){
        Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
    }
    if(keyCode === 32){
        Matter.Body.setPosition(ball2.body,{x:mouseX,y:mouseY});
    }
    if(keyCode === SHIFT){
        Matter.Body.setPosition(ball3.body,{x:mouseX,y:mouseY});
    }
    if(keyCode === ALT){
        Matter.Body.setPosition(ball4.body,{x:mouseX,y:mouseY});
    }
}
function mouseReleased(){
    chain.fly();
}
