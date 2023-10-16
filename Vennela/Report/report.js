const reasonInput = document.getElementById("reason");
const commentsInput = document.getElementById("comments");
const submitButton = document.getElementById("submit-report");
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const reason = reasonInput.value;
    const comments = commentsInput.value;
    const formData = {
        reason: reason,
        comments: comments,
    };
    const formDataJSON = JSON.stringify(formData);
    const storageKey = "report_" + Date.now(); 
    localStorage.setItem(storageKey, formDataJSON);
    reasonInput.value = "";
    commentsInput.value = "";
});