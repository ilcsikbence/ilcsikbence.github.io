document.getElementById("screenDiv").addEventListener("click", function() {logEvent("click")});
document.getElementById("screenDiv").addEventListener("dblclick", function() {logEvent("dblclick")});
document.getElementById("screenDiv").addEventListener("mousedown", function() {logEvent("mousedown")});
document.getElementById("screenDiv").addEventListener("mousemove", function() {logEvent("mousemove")});
document.getElementById("screenDiv").addEventListener("mouseout", function() {logEvent("mouseout")});
document.getElementById("screenDiv").addEventListener("mouseover", function() {logEvent("mouseover")});
document.getElementById("screenDiv").addEventListener("mouseup", function() {logEvent("mouseup")});
document.getElementById("screenDiv").addEventListener("tap", function() {logEvent("tap")});

console.log("hello")

function logEvent(ev) {
    console.log(ev);
    document.body.style.backgroundColor = "green";
}