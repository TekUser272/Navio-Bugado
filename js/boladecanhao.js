class BolaCanhao {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.raio = 30
    
      var bolacan_options = {
        isStatic: true
      }

      this.body = Bodies.circle(this.x,this.y,this.raio, bolacan_options);
      World.add(world, this.body);

      this.BolacanhaoImg = loadImage("./assets/cannonball.png");
    }

    Atirar(){
      
      var bola_angulo = cannon.angle -28
      bola_angulo = bola_angulo * (3.14/180)
      var angulo_speed = p5.Vector.fromAngle(bola_angulo)
      angulo_speed.mult(0.5)

      Matter.Body.setStatic(this.body, false)
      Matter.Body.setVelocity(this.body, {x:angulo_speed.x * (180/3.14), y:angulo_speed.y * (180/3.14)})
    }

    show(){

      push()

      imageMode(CENTER)
      image (this.BolacanhaoImg, this.body.position.x, this.body.position.y, this.raio, this.raio)

      pop()

    }
}