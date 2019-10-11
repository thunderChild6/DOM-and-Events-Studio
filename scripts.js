// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    let takeOffButton = this.document.getElementById("takeoff");
    let flightStatus = this.document.getElementById("flightStatus");
    let bkgColor = this.document.getElementById("shuttleBackground");
    let shuttleHeight = this.document.getElementById("spaceShuttleHeight");
    let landButton = this.document.getElementById("landing");
    let abortButton = this.document.getElementById("missionAbort")
    let rocket = this.document.getElementById("rocket");
    let upButton = document.getElementById("upButton");
    let downButton = document.getElementById("downButton");
    let rightButton = document.getElementById("rightButton");
    let leftButton = document.getElementById("leftButton");
    let move = 0;

    takeOffButton.addEventListener("click", function () {
        alert("Confirm that the shuttle is ready for takeoff.");
        flightStatus.innerHTML = "Shuttle in flight.";
        bkgColor.style.backgroundColor = "blue";
        shuttleHeight.innerHTML = 10000;
    });

    landButton.addEventListener("click", function () {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        bkgColor.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    });

    abortButton.addEventListener("click", function() {
        alert("Confirm that you want to abort the mission.");
        flightStatus.innerHTML = "Mission aborted.";
        bkgColor.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    });

    upButton.addEventListener("click", function(){
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        move -= 10;
        rocket.style.top = (move + "px");
    });

    downButton.addEventListener("click", function(){
        shuttleHeight.innerHTML -= 10000;
        move += 10;
        rocket.style.top = (move + "px");
    });

    rightButton.addEventListener("click", function(){
        move += 10;
        rocket.style.left = (move + "px");
    });

    leftButton.addEventListener("click", function(){
        move -= 10;
        rocket.style.left = (move + "px");
    });
});