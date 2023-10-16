const t1 = document.querySelector(".s2");
const t2 = document.querySelector(".s3");
const t3 = document.querySelector(".s4");
const o1 = document.querySelector(".o1");
const o2 = document.querySelector(".o2");

t1.addEventListener("click", () => {
  o1.classList.add("no-display");
  o2.classList.add("no-display");
});
t2.addEventListener("click", () => {
  o1.classList.remove("no-display");
  o2.classList.add("no-display");
});
t3.addEventListener("click", () => {
  o1.classList.add("no-display");
  o2.classList.remove("no-display");
});
