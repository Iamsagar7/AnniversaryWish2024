let playBtn = document.getElementsByClassName("play");
const audio = new Audio("./Bang Bang Title Track Full Video _ BANG BANG_Hrithik Roshan Katrina Kaif _Vishal Shekhar,Benny,Neeti (128  kbps).mp3");

playBtn[0].addEventListener("click", (e) => {
  audio.play();
  text.innerHTML = "Audio Playing🔊";
});


