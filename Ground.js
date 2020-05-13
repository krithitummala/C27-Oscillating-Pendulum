class Ground{
    //properties
 constructor(x,y,width,height){
  var options= {
      isStatic:true
  }
  this.object = Bodies.rectangle(x,y,width,height,options);
  World.add(world,this.object);
  this.width = width;
  this.height = height;
 }
 //functions
 display(){
  rectMode(CENTER);
  var pos = this.object.position;
  fill("brown");
  rect(pos.x,pos.y,this.width,this.height);
 }


}
