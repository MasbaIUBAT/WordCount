function WorldCount(boktita){
var count = 0;
for(var i = 0; i<boktita.length;i++){
   if(boktita[i] == " "){
 count++;
 }
}
count++;
return count;
}

WorldCount('amaro desh o matir o gondhe.');
