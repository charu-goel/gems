class Game {
constructor(){

}

getState(){
var gameStateRef  = database.ref('gameState');
gameStateRef.on("value",function(data){
gameState = data.val();
})

}

update(state){
database.ref('/').update({
gameState: state
});
}

async start(){
if(gameState === 0){
player = new Player();
var playerCountRef = await database.ref('playerCount').once("value");
if(playerCountRef.exists()){
playerCount = playerCountRef.val();
player.getCount();
}
form = new Form()
form.display();

}
box=[]
var x = 550 ; 
var y = 200 ;

for(var i= 1;i<=6;i++){
for (var j=1;j<=6;j++){
b=createSprite(x,y,35,35)
box.push(b);
x=x+50
// b.addImage(b1)
//b.scale=0.25
}
x=550
y=y+50

}
}

play(){
form.hide();

Player.getPlayerInfo();

if(allPlayers !== undefined){
background(rgb(198,135,103));
image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);




var displayPosition=60
var index=0
var j = 120
var r =Math.round(random(1,5))
for(var plr in allPlayers){
//add 1 to the index for every loop
index = index + 1 ;
displayPosition+=40

m=0
fill("orange")
textSize(40);
text("PLAYER"+index,j+20,displayPosition-30)
textSize(25);
text("NAME : "+allPlayers[plr].name ,j,displayPosition)
if(index===player.index){
text("SCORE : "+player.distance,j,displayPosition+20)
}

j=j+789


//console.log(i)
for(var i =0;i<=35;i++){

if(mousePressedOver(box[i])&&index===player.index&&m===0){
    console.log(m)
if(r===1&&m===0){
box[i].addImage("eme",emerald)
box[i].scale=0.1
player.distance=player.distance+5
m=m+1
}else if(r===2&&m===0){
box[i].addImage("sph",sapphire)
box[i].scale=0.1;
player.distance=player.distance+3
m=m+1
}else if(r===3&&m===0){
box[i].addImage("ru",ruby)
box[i].scale=0.1;
player.distance=player.distance+2
m=m+1
}else if(r===4&&m===0){
box[i].addImage("au",gold)
box[i].scale=0.08;

player.distance=player.distance+1
m=m+1
}else if(r===5&&m===0){

box[i].addImage("blast",bomb)
box[i].scale=0.1;

player.distance=player.distance-5
m=m+1
}

}

}  

}

drawSprites();
if(player.distance<0){
game.update(2)


}
}
}
}