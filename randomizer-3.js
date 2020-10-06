// The things what i love
let things = [{
    who: "Father",
    color: "Orange"
    },{
    who: "Mother ",
    color: "chartrese"
    },{
    who:"Brother",
    color: "poop"
    },{
    who:"Girlfriend",
    color: "blue"
    },{
    who:"Bestfriends",
    color: "black"
    },{
    who:"Games",
    color: "red"
    },{
    who:"Art",
    color: "white"
    }];

   let randomIndex;
   let animating = false;


    function setup() {
      createCanvas(400, 400);
      background(200);
      textSize(19);

      text("Click to Randomize.", 50,50);
}

  function draw() {

  if(animating == true){
    ellipse(random(width), random(height), random (50, 200));

  }
}

   function randomizer(){
     animating = false;

  if (things[0]) {
    background(random(200, 255));
    randomIndex = int(random(things.length));
    text(`${things[randomIndex].who}'s favorite color is ${things[randomIndex].color}`, 35, 155);
    things.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!",120,120);
  }
}
   function mousePressed()  {
    animating = true;
    setTimeout(randomizer, 2000);

}
