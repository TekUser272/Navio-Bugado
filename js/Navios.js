class Navios {
    constructor(x, y, width, height, navioPos) {
      this.body = Bodies.rectangle (x, y, width, height)
      this.width = width
      this.height = height
    
      this.image = loadImage("./assets/boat.png");

      this.navioPosition = navioPos
      World.add(world, this.body)

      //var _options = {
        //isStatic: false
      //}

      //this.body = Bodies.circle(this.x,this.y,this.raio, bolacan_options);
      //World.add(world, this.body);

      
    } 
    
  show(){
    var angle = this.body.angle
    var pos = this.body.position

    push()

    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image, 0, this.navioPosition, this.width, this.height)
    
    pop()
  }
}