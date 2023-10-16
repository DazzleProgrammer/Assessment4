document.addEventListener("DOMContentLoaded", function () {
    const displayReason = document.getElementById("displayReason");
    const displayComment = document.getElementById("displayComment");
    const savedData1 = localStorage.getItem("savedData1");
    const savedData2 = localStorage.getItem("savedData2");

    if (savedData1) {
        displayReason.textContent = `Saved Data 1: ${savedData1}`;
    } else {
        displayReason.textContent = "No Reason.";
    }

    if (savedData2) {
        displayComment.textContent = `Saved Data 2: ${savedData2}`;
    } else {
        displayComment.textContent = "No Comments.";
    }
});
