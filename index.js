var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomNumber2 = Math.floor(Math.random()*6) +1;

var images1 = "lolchars/lol" + randomNumber1 + ".png";
var images2 = "lolchars/lol" + randomNumber2 + ".png";

document.querySelector(".roll .img1").setAttribute("src", images1);
document.querySelector(".roll .img2").setAttribute("src", images2);