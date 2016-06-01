
var urlISS='http://api.open-notify.org/iss-now.json';
var long=0;
var lat=0;
var mapImgs;
var plus;
var minus;
var errorM="noData";
var zoom=5;
var apikey="AIzaSyBlDah1gpyfLHBQwGO9scIa3ynHnHOsPks";



function setup() {
  askISS();
  createCanvas(360,360);
  setInterval(askISS,2000);
  setInterval(getMap,2000);
}


function askISS(){
loadJSON(urlISS,gotData,'jsonp');//,didntGetData);
}



function gotData(data){
long=data.iss_position.longitude; 
lat=data.iss_position.latitude;
errorM="GotData";
}


function getMap()
{
//var urlGMap="https://maps.googleapis.com/maps/api/staticmap?maptype=satellite&center="+long+","+lat+"&zoom="+zoom+"+&size="+width+"x"+height+"&key=AIzaSyBlDah1gpyfLHBQwGO9scIa3ynHnHOsPks";
var urlGMap="https://maps.googleapis.com/maps/api/staticmap?maptype=satellite&center="+lat+","+long+"&zoom="+zoom+"+&size="+width+"x"+height+"&key="+apikey;
mapImgs=loadImage(urlGMap);
}

function keyTyped(){
  if(key==='i'){zoom++;}
  if(key==='o'){zoom--;}
}

function draw() {
background(255);
imageMode(CENTER);
if(mapImgs){image(mapImgs,width/2,height/2,width,height);}
fill(color(255,0,0)); 
textAlign(CENTER);textSize(width/25);
text("International Space Station\nLocation\nLongitude: "+long+"\nLatitude: "+lat+"\n"+"Zoom with i and o keys.",width/2,height/10); 
fill(color(255,0,0));
ellipse(width/2,height/2,width/40,width/40);
//if(key=='g'&& keyIsPressed){zoom=zoom+1;}
}
