function go(n){
  for (var steps=0;steps<n;steps=steps+1){
  if (getColor() == "red") {
    up();up();up();
  } else{
  down();down();down();}
  }
}

right();
var color=getColor();
go(1);
if (getColor()=="red"){
  left();} else{right();
  }
if (color=="red"){
  up();}else{down();
}
