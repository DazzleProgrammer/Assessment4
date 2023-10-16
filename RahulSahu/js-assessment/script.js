document.addEventListener("DOMContentLoaded", function () {
    const dataInput1 = document.getElementById("dataInput1");
    const dataInput2 = document.getElementById("dataInput2");
    const saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", function () {
        const data1 = dataInput1.value;
        const data2 = dataInput2.value;

        // Save both data items to local storage
        localStorage.setItem("savedData1", data1);
        localStorage.setItem("savedData2", data2);

        // Navigate to a new page
        window.location.href = "display.html";
    });
});