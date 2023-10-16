const button = document.querySelector("button");
const select = document.querySelector("select");
const textarea = document.querySelector("textarea");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let data = { reason: select.value, comment: textarea.value };

  alert(`reason ${select.value} details ${textarea.value}`);

  localStorage.setItem("data", JSON.stringify(data));

  select.value = "Hate Speech";
  textarea.value = "";
});
