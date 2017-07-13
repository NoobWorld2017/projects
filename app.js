var startTime = new Date().getTime();

function makeShapeAppear() {
    document.getElementById("shape").style.display = "block";
    startTime = new Date().getTime();
}

function appearAfterDelay(){

    setTimeout(makeShapeAppear, Math.random() * 2000);

}

function moveShape() {
    document.getElementById("shape").style.top = "" + Math.floor(Math.random() * 400) + "px";
    document.getElementById("shape").style.left = "" + Math.floor(Math.random() * 400) + "px";
}

function changeShape() {
    var rngNum = Math.floor(Math.random() * 2);
    if(rngNum){
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0";
    }
}


appearAfterDelay();

document.getElementById('shape').onclick = function() {
    document.getElementById('shape').style.display = "none";
    var endTime = new Date().getTime();
    var timeTaken = (endTime - startTime) / 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    moveShape();
    changeShape();
    appearAfterDelay();
}