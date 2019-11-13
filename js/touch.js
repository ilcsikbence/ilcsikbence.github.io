document.getElementById("testButton").addEventListener("click", function() {logEvent("click")});
document.getElementById("testButton").addEventListener("dblclick", function() {logEvent("dblclick")});
document.getElementById("testButton").addEventListener("mousedown", function() {logEvent("mousedown")});
document.getElementById("testButton").addEventListener("mousemove", function() {logEvent("mousemove")});
document.getElementById("testButton").addEventListener("mouseout", function() {logEvent("mouseout")});
document.getElementById("testButton").addEventListener("mouseover", function() {logEvent("mouseover")});
document.getElementById("testButton").addEventListener("mouseleave", function() {logEvent("mouseout")});
document.getElementById("testButton").addEventListener("mouseenter", function() {logEvent("mouseover")});
document.getElementById("testButton").addEventListener("mouseup", function() {logEvent("mouseup")});
document.getElementById("testButton").addEventListener("pointerlockchange", function() {logEvent("pointerlockchange")});
document.getElementById("testButton").addEventListener("pointerlockerror", function() {logEvent("pointerlockerror")});
document.getElementById("testButton").addEventListener("tap", function() {logEvent("tap")});
document.getElementById("testButton").addEventListener("wheel", function() {logEvent("wheel")});
document.getElementById("testButton").addEventListener("auxclick", function() {logEvent("auxclick")});
document.getElementById("testButton").addEventListener("contextmenu", function() {logEvent("contextmenu")});
document.getElementById("testButton").addEventListener("focus", function() {logEvent("focus")});
document.getElementById("testButton").addEventListener("blur", function() {logEvent("blur")});
document.getElementById("dragButton").addEventListener("drag", function() {logEvent("drag")});
document.getElementById("dragButton").addEventListener("dragend", function() {logEvent("dragend")});
document.getElementById("dragButton").addEventListener("dragenter", function() {logEvent("dragenter")});
document.getElementById("dragButton").addEventListener("dragstart", function() {logEvent("dragstart")});
document.getElementById("dragButton").addEventListener("dragleave", function() {logEvent("dragleave")});
document.getElementById("dragButton").addEventListener("dragover", function() {logEvent("dragover")});
document.getElementById("dragButton").addEventListener("drop", function() {logEvent("drop")});

function logEvent(ev) {
    console.log(ev);
}