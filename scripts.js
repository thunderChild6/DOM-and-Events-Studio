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

    this.document.getElementById("upButton").addEventListener("click", function(){
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        rocket.style.paddingBottom += "10px";
    });

    this.document.getElementById("downButton").addEventListener("click", function(){
        shuttleHeight.innerHTML -= 10000;
        //Fix this one first
        let padSpace = 10;
        rocket.style.paddingTop = (String(padSpace)+"px");
    });

    this.document.getElementById("rightButton").addEventListener("click", function(){
        // rocket.style.paddingLeft += "10px";
        rocket.style.position = "relative";
        // rocket.style.??? = 10px;
    });

    this.document.getElementById("leftButton").addEventListener("click", function(){
        rocket.style.paddingRight += "10px";
    });
/* for up, down, left, right buttons:
    rocket image move 10 px in direction clicked
*/

});