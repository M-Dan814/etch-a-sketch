const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
}

const blocks = document.querySelectorAll(".box");
blocks.forEach(
    block => {block.addEventListener("mouseover", (e) => {
        e.target.classList.remove("box")
        e.target.classList.add("dark")
    })}
)