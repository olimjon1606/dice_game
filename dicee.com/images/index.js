var random1 = Math.random();
random1 = Math.floor(random1*6)+1;
var randomImg1 = "images/dice" + random1 + ".png"; 
document.querySelector(".img1").setAttribute("src", randomImg1);

var random2 = Math.random();
random2 = Math.floor(random2*6)+1;
var randomImg2 = "images/dice" + random2 + ".png"; 
document.querySelector(".img2").setAttribute("src", randomImg2);

if (random1 === random2){
    document.querySelector("h1").textContent = ("Drow!");
}else if (random1 > random2){
    document.querySelector("h1").textContent = ("First player Won!");
}else{
    document.querySelector("h1").textContent = ("Second player Won!");
}