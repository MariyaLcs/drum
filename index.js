const numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
  });
}
