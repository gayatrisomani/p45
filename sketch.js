var knife,knifean;
var target,targetImg,targetGroup;
var backImg;
var isDestroyed = false;

function preload(){
    knifean = loadImage("k.png")
    targetImg = loadImage("t.png")
    backImg = loadImage("background.png")
}
function setup() {
    createCanvas(1500, 750);


    knife = createSprite(100,670,30,40)
    knife.addImage(knifean)
    knife.scale = 0.2

    target = createSprite(60,200,50,70)
    target.addImage(targetImg)

    targetGroup = new Group()
  }
  
  function draw() {
    background( backImg);
    if(keyDown("left")){
        knife.x = knife.x-20
    }
    if(keyDown("right")){
        knife.x = knife.x+20
    }
    if(keyDown("space")){
        knife.velocityY = -10
    }
    rtarget();
   // target.overlap(bulGroup, function(collector, collected) {
       
        //collected is the sprite in the group collectibles that triggered
        //the event
       // collected.remove();
     // });
     if(target.isTouching(knife)){
         console.log("www")
         target.visible=false
        isDestroyed = true
     }
    drawSprites();
  }
  function rtarget(){
  
     if( isDestroyed){
         x = random(100,1500)
         y = random(50,400)
         target = createSprite(x,y,50,70)
         // target.addImage(targetImg)
          //target.scale = 0.3
          isDestroyed = false
     }
  }

  