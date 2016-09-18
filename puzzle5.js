function go(n){
  for (var steps=0;steps<n;steps=steps+1){
  if (getColor() == "red") {
    up();
  } else if(getColor()=="blue"){
  down();} else {
  right();
    }
  }
}

go(14);
