/* code for play button */
let titleCard = document.querySelector(".titlescreen")
let startButton = document.querySelector(".playbutton")
let screenOne = document.querySelector(".promptone")

/* play */
startButton.onclick = function() {
  screenOne.style.display = "block";
  titleCard.style.display = "none";
}

/* mall scene */
let mallScene = document.querySelector(".mallscene")
let yesExit = document.querySelector(".acceptexit")
let noExit = document.querySelector(".denydeath")
let buttonExit = document.querySelector(".optionone")

buttonExit.onclick = function() {
  mallScene.style.display = "block";
  screenOne.style.display = "none";
}

/* death */
let endDeath = document.querySelector(".enddeath")
let buttonDeath = document.querySelector(".optiontwo")
buttonDeath.onclick = function() {
  screenOne.style.display="none";
  endDeath.style.display="block";
}

let restartButton = document.querySelector(".restart")
restartButton.onclick = function() {
  screenOne.style.display="block";
  endDeath.style.display="none";
  
let denyDeath = document.querySelector(".denydeath")
  denyDeath.onclick = function () {
    endDeath.style.display="block";
    mallScene.style.display="none";
  }
  
}

let acceptExit = document.querySelector(".yesexit")
let acceptScreen = document.querySelector(".leavemall")
 acceptExit.onclick = function() {
   acceptScreen.style.display="block";
   mallScene.style.display="none";
 }
let restart1 = document.querySelector(".restart1")
restart1.onclick = function (){
  screenOne.style.dispplay="block";
  acceptScreen.style.display="none";
  
}