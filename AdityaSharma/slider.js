document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".contentsection");

    sections.forEach(section => {
        section.addEventListener("click", function() {
            const targetId = section.getAttribute("data-target");
            const content = document.getElementById(`${targetId}Content`);
            toggleContent(content);
        });
    });

    function toggleContent(content) {
        content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
    }
});