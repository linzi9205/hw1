function goDown(){
  while(getColor()!="red"){
    down();}
  right();
  right();
}

function goUp(){
  while(getColor()!="red"){
    up();}
  right();
  right();
}

goDown();
goUp();
goDown();
goUp();
goDown();
