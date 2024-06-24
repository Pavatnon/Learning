
var diceFaceImg = ["./images/dice1.png", "./images/dice2.png", 
                    "./images/dice3.png", "./images/dice4.png", 
                    "./images/dice5.png", "./images/dice6.png"];
var dicePoint = diceFaceImg.length;                    
var dice = [".img1", ".img2"];
var playerPoint = [,];

changeDiceFace(randomNumber(dicePoint), dice[0]);
changeDiceFace(randomNumber(dicePoint), dice[1]);

function randomNumber(dice) {
    var randomDice = Math.floor(Math.random() * dice + 1);
    return randomDice;
}

function changeDiceFace(numberOfDice, whatDice){
    if (dice[0] === whatDice) {
        for (var i = 1; i <= dicePoint; i++) {
           if (numberOfDice === i) {
                document.querySelector(dice[0]).setAttribute("src", diceFaceImg[i-1]);
                playerPoint[0] = i;
           }
            
        }  
    }
    if (dice[1] === whatDice) {
        for (var i = 1; i <= dicePoint; i++) {
           if (numberOfDice === i) {
                document.querySelector(dice[1]).setAttribute("src", diceFaceImg[i-1]);
                playerPoint[1] = i;
           }
            
        }  
    }

    winCheck(playerPoint[0], playerPoint[1]);
}

function winCheck(player1Point, player2Point){
    if (player1Point > player2Point) {
        document.querySelector(".winstate").innerHTML = "Player 1 Win!";
    }
    if (player1Point < player2Point) {
        document.querySelector(".winstate").innerHTML = "Player 2 Win!";
    }
    if (player1Point === player2Point) {
        document.querySelector(".winstate").innerHTML = "Draw";
    }
}