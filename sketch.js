const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var Balles = [];
var Plinkos = [];
var Divisions = [];
var divisionHeight = 300;

var engine,world;
var t;
var mConstraint;

function setup(){
 createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,695,1200,10);

    for(var k = 0; k <=width; k=k+120){
        Divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    }

    for(var j = 40; j<= width; j=j+50){
        Plinkos.push(new Obstacle(j,75));
    }

    for(var i = 60; i<= width; i=i+50){
        Plinkos.push(new Obstacle(i,150));
    }

    for(var e = 40; e<= width; e=e+50){
        Plinkos.push(new Obstacle(e,225));
    }

    for(var u = 60; u<= width; u=u+50){
        Plinkos.push(new Obstacle(u,300));
    }
    
    
    if(frameCount%60===0){
       Balles.push(new Ball(random(20,1180),0));
    }

console.log(Balles);
}

function draw(){
    background(0);
    Engine.update(engine); 

    ground1.display();  
   
    for(var j = 0; j < Plinkos.length; j++){
        Plinkos[j].display();
    }

    for(var k = 0; k < Divisions.length; k++){
        Divisions[k].display();
    }

    for(var r = 0; r < Balles.length; r++){
        Balles[r].display();
    }


}