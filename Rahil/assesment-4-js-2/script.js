var btn = document.getElementById("Btn");
var popup = document.getElementById("Popup");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    popup.style.display = "block";
}

span.onclick = function () {
    popup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

document.getElementById("submit").onclick = function () {
    var popup = document.getElementById("Popup");
    var report = document.getElementById("txt").value;
    alert("Submit Report: " + report);
    popup.style.display = "none";
}