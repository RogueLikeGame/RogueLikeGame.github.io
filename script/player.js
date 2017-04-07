var moveMentLeft = 0;
var moveMentTop = 0;
var moveMentDestaince = 75;
//^ creating vars
//checking for inputs
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    //when done testing can get ride of the alert
    // alert(event.key);
    //that thing
    var keyPressed = event.key;
    localStorage.setItem("keyPressed", keyPressed);
    movePlayer();
    event.preventDefault();
}, true);

function movePlayer() {
    var keyPressed = localStorage.getItem("keyPressed");
    console.log(keyPressed);
    if (keyPressed == "w") {
        moveMentTop = moveMentTop - moveMentDestaince;
        document.getElementById("player").style.top = moveMentTop;
        console.log("Moved Forward");
    }
    else if (keyPressed == "d") {
        moveMentLeft = moveMentLeft + moveMentDestaince;
        document.getElementById("player").style.left = moveMentLeft;
        console.log("Moved Right");
    }
    else if (keyPressed == "s") {
        moveMentTop = moveMentTop + moveMentDestaince;
        document.getElementById("player").style.top = moveMentTop;
        console.log("Moved Backwards");
    }
    else if (keyPressed == "a") {
        moveMentLeft = moveMentLeft - moveMentDestaince;
        document.getElementById("player").style.left = moveMentLeft;
        console.log("Moved Left")
    }
}
