let doorImage1 = document.getElementById('door1');
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numClosedDoor = 3;  
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let currentPlaying = true;
let startButton = document.getElementById('start');
doorImage1.onclick = () => {
    doorImage1.src = botDoorPath;
};
doorImage2.onclick = () => { 
    doorImage2.src = beachDoorPath;
};
doorImage3.onclick = () => { 
    doorImage3.src = spaceDoorPath;
};
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoor);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
  else if(choreDoor === 2){
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}; 
door1.onclick = () => {
  if(!isClicked(doorImage1) && currentPlaying === true){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);}
};
door2.onclick = () => {
  if(!isClicked(doorImage2) && currentPlaying === true){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);}
};
door3.onclick = () => {
  if(!isClicked(doorImage3) && currentPlaying === true){
  doorImage3.src = openDoor3;
  playDoor(doorImage3);}
};
startButton.onclick = () => {
  if(currentPlaying === false){
  startRound();}
};

function playDoor(door){
  numClosedDoor --;
  if(numClosedDoor === 0){
    gameOver('win');
  }
  else if(isBot(door) === true){
    gameOver();
  }
}
function isBot(door){
  if(door.src === botDoorPath){
    return true;
  }
  else{
    return false;
  }
}
function isClicked(door){
  if(door.src === closedDoorPath){
    return false;
  }
  else{
    return true;
  }
}
function gameOver(status){
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
  else{
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentPlaying = false;
}
function startRound(){
  randomChoreDoorGenerator();
  numClosedDoor = 3;
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  startButton.innerHTML = 'Play';
  currentPlaying = true;
}

startRound();

