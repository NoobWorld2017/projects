var startTime = new Date().getTime();
var colorArray = ["red", "blue", "purple", "yellow", "pink", "peachpuff", "peru", "rosybrown", "royalblue", "green"];

function makeShapeAppear() {
    document.getElementById("shape").style.display = "block";
    startTime = new Date().getTime();
}

function appearAfterDelay(){

    setTimeout(makeShapeAppear, Math.random() * 2000);

}

function moveShape() {
    document.getElementById("shape").style.top = Math.floor(Math.random() * 520) + "px";
    document.getElementById("shape").style.left = Math.floor(Math.random() * 1100) + "px";
}

function changeShape() {
    var rngNum = Math.floor(Math.random() * 2);
    if(rngNum){
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0";
    }
}

function shapeSize (){
    var randomNumberSize = Math.floor((Math.random() * 145) + 65);

    document.getElementById("shape").style.height = randomNumberSize + "px";
    document.getElementById("shape").style.width = randomNumberSize + "px";
}

function changeColor() {
    var randomColor = Math.floor(Math.random() * colorArray.length);

    document.getElementById("shape").style.backgroundColor = colorArray[randomColor];
}

appearAfterDelay();
changeColor();

document.getElementById('shape').onclick = function() {
    document.getElementById('shape').style.display = "none";
    var endTime = new Date().getTime();
    var timeTaken = (endTime - startTime) / 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    moveShape();
    changeShape();
    shapeSize();
    changeColor();
    appearAfterDelay();
}

//Hi is changed stuff