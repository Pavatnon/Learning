var drumsKey = document.querySelectorAll(".drum");
var soundList =  ['sounds/snare.mp3', 'sounds/tom-1.mp3', 'sounds/tom-2.mp3', 'sounds/tom-3.mp3', 
                    'sounds/tom-4.mp3', 'sounds/crash.mp3', 'sounds/kick-bass.mp3'];


for (var i = 0; i < drumsKey.length; i++) {
    drumsKey[i].addEventListener("click", function handleOnClicked(){
        handleAudio(this.textContent);
        
    }); 
}

function handleAudio(key){
    for (var i = 0; i < drumsKey.length; i++) {
        if(key === drumsKey[i].textContent){
            console.log(key + " key")
            var soundplay = new Audio(soundList[i]);
            soundplay.play();
            
        }
    }
    
}

document.addEventListener("keypress", function(event){
    
    switch (event.key) {
        case "w":
            var soundplay = new Audio(soundList[0]);
            soundplay.play();
            break;
        case "a":
            var soundplay = new Audio(soundList[1]);
            soundplay.play();
            break;
        case "s":
            var soundplay = new Audio(soundList[2]);
            soundplay.play();
            break;
        case "d":
            var soundplay = new Audio(soundList[3]);
            soundplay.play();
            break;
        case "j":
            var soundplay = new Audio(soundList[4]);
            soundplay.play();
            break;
        case "k":
            var soundplay = new Audio(soundList[5]);
            soundplay.play();
            break;
        case "l":
            var soundplay = new Audio(soundList[6]);
            soundplay.play();
            break;
        
        default:
            console.log("Have not this key");
            break;
    }
});



