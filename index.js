var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomnumber2 = Math.random();
randomnumber2 = Math.floor(randomnumber2*6)+1;

var image1 ="images/dice"+randomnumber1+".png"
var image2 ="images/dice"+randomnumber2+".png"

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);


if (randomnumber1 > randomnumber2){
  document.querySelector("h1").textContent = "🚩Player 1 Win!"
}if(randomnumber1 < randomnumber2){
  document.querySelector("h1").textContent = "Player 2 Win!🚩"
}if(randomnumber1 == randomnumber2){
  document.querySelector("h1").textContent = "🚩Draw🚩"
}
