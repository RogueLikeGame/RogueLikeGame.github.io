var rangeOfRandomNumber = 0;
var justFoundRandomNumber = 0;
var theWallThatWeAreOn = 11;
var GapNumber = 15;
var theWallToHide;
function randomNumber() {
    justFoundRandomNumber = justFoundRandomNumber - justFoundRandomNumber;
    justFoundRandomNumber = justFoundRandomNumber + Math.floor((Math.random() * rangeOfRandomNumber) + 1);
}

function startDraw(){
    if(theWallToHide < 48 ){
        rangeOfRandomNumber = rangeOfRandomNumber - rangeOfRandomNumber;
        rangeOfRandomNumber = rangeOfRandomNumber + 4;
        randomNumber();

        if (justFoundRandomNumber == 4) {
            if (theWallThatWeAreOn == GapNumber) {
                GapNumber = GapNumber + 8;
                theWallThatWeAreOn = theWallThatWeAreOn + 3;
                startDraw();
            }
            else {
                theWallThatWeAreOn = theWallThatWeAreOn + 1;
                startDraw();
            }
        }
        else if (justFoundRandomNumber != 4) {
            theWallToHide = "WALL" + theWallThatWeAreOn;
            alert(theWallToHide);
            hideTheWall();
            theWallThatWeAreOn = theWallThatWeAreOn +1;
            startDraw();
        }
    }
    else{
        return;   
    }
}

function hideTheWall(){
    var wall = document.getElementById(theWallToHide);
    console.log(wall);
    console.log(theWallToHide);
    wall.style.visibility = 'hidden';
}
//console.log(theWallToHide);
// document.getElementById(theWallToHide).style.visibility = 'hidden';

startDraw();
