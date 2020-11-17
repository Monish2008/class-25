class Log extends BaseClass{
  constructor(x,y,hieght,angle){
        super(x,y,20,hieght,angle)
        Matter.Body.setAngle(this.body,angle)
    this.image = loadImage("sprites/wood2.png");
  }
}