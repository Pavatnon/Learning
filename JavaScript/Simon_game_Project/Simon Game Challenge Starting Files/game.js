var buttonIngame = $(".btn");
var buttonValue = [];
var soundList = ["green.mp3","red.mp3","yellow.mp3","blue.mp3"];
var readyCheck = false;
var playerTurn = false;
var pressCount = 0;
var gameState = [];

$(document).on("keypress", function(input){
    if(input.key === "a"){
        gameState = [];
        pressCount = 0;
        buttonValue = [];
        readyCheck = true;
        if(gameState.length === 0){
            aiPlayerTurn();
            
        } 
    }
});



$(buttonIngame).on("click", function(){
    if(readyCheck === true){
        if (playerTurn === true) {  
            if($(this).hasClass("green")){
                playAnimOnpress(buttonIngame[0], soundList[0]);
                buttonValue.push(1); 
                gamePlay(buttonValue);
                
            }
            if($(this).hasClass("red")){
                playAnimOnpress(buttonIngame[1], soundList[1]);
                buttonValue.push(2);
                gamePlay(buttonValue);
                
            }
            if($(this).hasClass("yellow")){
                playAnimOnpress(buttonIngame[2], soundList[2]);
                buttonValue.push(3);
                gamePlay(buttonValue);
                
            }
            if($(this).hasClass("blue")){
                playAnimOnpress(buttonIngame[3], soundList[3]);
                buttonValue.push(4);
                gamePlay(buttonValue);
            }    
        }
        if (playerTurn === false) {
            setTimeout(function(){
                aiPlayerTurn(); 
            }, 800);
        }
        
    }
});   

// Anim&&sound function
function aiPlayerTurn(){
    var locationIndex = gameState.length;
    addGameState(randomButton(buttonIngame.length));
    if (gameState[locationIndex] == 1) {
        playAnimOnAi(buttonIngame[0], soundList[0]);

    }
    if (gameState[locationIndex] == 2) {
        playAnimOnAi(buttonIngame[1], soundList[1]);
    }
    if (gameState[locationIndex] == 3) {
        playAnimOnAi(buttonIngame[2], soundList[2]);
  
    }
    if (gameState[locationIndex] == 4) {
        playAnimOnAi(buttonIngame[3], soundList[3]); 
    }
    $("#level-title").text("Level: " + gameState.length)
    playerTurn = true;
}
function playAnimOnAi(keypress, sound){
    $(keypress).fadeOut(100).fadeIn(100);
    var audioSrc = new Audio("sounds/" + sound);
    audioSrc.play();
    
}

function playAnimOnpress(keypress, sound){ 
    $(keypress).addClass("pressed");
    setTimeout(function(){
        $(keypress).removeClass("pressed");
    }, 100);

    var audioSrc = new Audio("sounds/" + sound);
    audioSrc.play();
}

// Gameplay Function
function addGameState(value){
    gameState.push(value);
}

function randomButton(numberOfButton){
    var value = Math.floor(Math.random() * numberOfButton) + 1;
    return value;
}

function gamePlay(value){
    pressCount++;
    for (var i = 0; i < buttonValue.length; i++) {
        if (value[i] != gameState[i]) {
            gameOverState();
        }  
     }
    if (pressCount === gameState.length) {
        buttonValue = [];
        pressCount = 0;
        if (readyCheck === true) {
            playerTurn = false;
        }
    }
      
}
function gameOverState(){
    $("#level-title").text("Game Over, Press A key to Play Restart.");
    var wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 100);
    readyCheck = false;
   
}





