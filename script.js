const container = document.querySelector(".container"); 

for (let i = 0; i < 256; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
}

const button = document.querySelector("#new-grid");
button.addEventListener("click", () => {
  let input = parseInt(prompt("Enter new grid size (Upto 100): "));
  if (input > 100) {
    input = parseInt(prompt("Invalid Value. Enter again: "));
  }
  container.style["grid-template-rows"] = `repeat(${input}, 1fr)`;
  container.style["grid-template-columns"] = `repeat(${input}, 1fr)`;
  container.innerHTML = "";
  for (let i = 0; i < input * input; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }

  const blocks = document.querySelectorAll(".box");
  blocks.forEach((block) => {
    block.addEventListener("mouseover", (e) => {
      e.target.classList.remove("box");
      e.target.classList.add("dark");
    });
  });
});

const blocks = document.querySelectorAll(".box");
blocks.forEach((block) => {
  block.addEventListener("mouseover", (e) => {
    e.target.classList.remove("box");
    e.target.classList.add("dark");
  });
});
