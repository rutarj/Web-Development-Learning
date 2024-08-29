var numberofDrumbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberofDrumbuttons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
        
        var buttoninnerHTML= this.innerHTML;
        switch (buttoninnerHTML) {
            case "w":
                 var audio = new Audio("sounds/tom-1.mp3");
                 audio.play();
                 alert("w got Clicked");

            break;


            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                alert("a got Clicked");

            break;
            
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                alert("s got Clicked");

            break;
            
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                alert("d got Clicked");

            break;

            case "j":
                var kick_bass = new Audio("sounds/kick-bass.mp3");
                kick_bass.play();
                alert("j got Clicked");
                

            break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                alert("k got Clicked");

            break;
            case "l":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                alert("l got Clicked");

            break;        
        
            default:
                break;
        }

        
        
    });

};

