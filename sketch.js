const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon, bola, navios = [];

var matrizbolacanhao = []


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  angleMode(DEGREES)
  angle = 15

  cannon = new Cannon (180,110,130,100,angle)
  //navios = new Navios (width - 79, height - 60, 170, 170, -80)

  //console.log (matrizes [1] [1])
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width * 2, 1);

  push();

  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);

  pop();  

  mostrarnavios()

  for (var i = 0; i < matrizbolacanhao.length; i ++){
    mostrarbolas(matrizbolacanhao [i]);
  }

  console.log(navios)

  cannon.show()
  //bola.show()
}

function keyReleased(){

  if (keyCode == DOWN_ARROW){
    var bola = new BolaCanhao (cannon.x, cannon.y)
    bola.Atirar()
    matrizbolacanhao.push(bola)
  }
}

//function keyPressed(){
  ////if (keyCode == DOWN_ARROW){
    
    
    
  //}
//}

function mostrarbolas(bola){
  if (bola){
    bola.show()
  }
}

function mostrarnavios(){
  if (navios.length > 0){
    
    if(navios [navios.length-1].body.position.x < width - 300 || navios[navios.lenght -1] === undefined){
      var positions = [-40,-60,-70,-20]
      var position = random (positions)
      var navio = new Navios (width, height -100, 170, 170, position)
      navios.push(navio)
    }

    for (var i = 0; i < navios.length; i ++){
      if(navios[i]){
        Matter.Body.setVelocity(navios[i].body, {
          x:-0.9,
          y:0
        })
        
        navios[i].show()
      }
      else{navios[i]}
    }

  }else {
    var navio = new Navios (width, height - 60, 170, 170, -60)
    navios.push(navio)
  }
}

