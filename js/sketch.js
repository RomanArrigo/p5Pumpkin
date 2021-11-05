function setup() {
   var canvas = createCanvas(600, 600);
   canvas.parent("p5container")
    
    //initialising variables that affect all of the drawn shapes
    //x,y poisition:
    pumpkinX= width/2;
    pumpkinY= height/2;
    
    //height and width of circles
    pumpkinWidth=180;
    pumpkinHeight=pumpkinWidth-60;
    
    //variables that affect eye size 
    pEyeSize= pumpkinHeight-80;
    pIrisSize= pEyeSize-30;
  }
  
  function draw() {
    background(215);
    
    //Pumpkin
    
      //Dark Ellipse Green
      noStroke();
      fill(2, 92, 12);
      triangle(270, 215, 298, 260, 326, 215);
    
      //Light Green Ellipse
      noStroke();
      fill(3, 163, 22);
      triangle(286, 220, 298, 260, 310, 220);
    
      //back ellipse dark orange
      noStroke();
      fill(180, 52, 37);
      ellipse(pumpkinX,pumpkinY,pumpkinWidth,pumpkinHeight);
      
      //back ellipse light
      noStroke();
      fill(240, 90, 40);
      ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-10,pumpkinHeight-10);
    
      //Create another dark orange middle ellipse to make it look more pumpkin-y
      noStroke();
      fill(180, 52, 37);
      ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-40,pumpkinHeight-(-7));
  
      //Create another light orange middle ellipse to make it look more pumpkin-y
      noStroke();
      fill(240, 90, 40);
      ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-53,pumpkinHeight-(-7));
    
    
    
      //nose
      fill(150,25,0);
        triangle(pumpkinX-15, pumpkinY+20, pumpkinX, pumpkinY-5, pumpkinX+15, pumpkinY+20);
    
      //left eye - add a right eye here
      noStroke();
      fill(0, 0, 0);
      ellipse(pumpkinX-35,pumpkinY-20,pEyeSize,pEyeSize);
  
      //right eye
      noStroke();
      fill(0, 0, 0)
      ellipse(pumpkinX-(-35),pumpkinY-20,pEyeSize,pEyeSize);
  
    
      //eye pupils - add a left pupil here
      noStroke();
      fill(248, 239, 47);
      ellipse(pumpkinX-35,pumpkinY-20,pIrisSize,pIrisSize);
    
      noStroke();
      fill(248, 239, 47);
      ellipse(pumpkinX-(-35),pumpkinY-20,pIrisSize,pIrisSize);
    
    
    
  }