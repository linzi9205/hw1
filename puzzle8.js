function goDown(n){
  var steps=0;
  for(steps=0;steps<n;steps=steps+1){
    down();}
  right();
  right();
}

function goUp(n){
  var steps=0;
  for(steps=0;steps<n;steps=steps+1){
    up();}
  right();
  right();
}

goDown(8);
goUp(7);
goDown(7);
goUp(7);
goDown(7);
