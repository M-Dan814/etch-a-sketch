const container = document.querySelector(".container"); // Selecting the container div

for (let i = 0; i < 256; i++) {
  // Loop to fill the container div with smaller divs (pixels)
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
}

const button = document.querySelector("#new-grid"); // Selecting the button
button.addEventListener("click", () => {
  let input = parseInt(prompt("Enter new grid size (Upto 100): ")); // Take an input value and parse it to integer
  if (input > 100) { // Check if the given value is greater than 100
    input = parseInt(prompt("Invalid Value. Enter again: "));
  }

  // Setting number of rows and columns to the value entered
  container.style["grid-template-rows"] = `repeat(${input}, 1fr)`; 
  container.style["grid-template-columns"] = `repeat(${input}, 1fr)`;
  container.innerHTML = ""; // Emptying the container div of previous pixels
  for (let i = 0; i < input * input; i++) { // Filling up the container div with pixels according to the input
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }

  const blocks = document.querySelectorAll(".box"); // Selecting all the pixels
  // Adding the hover event listener to each and every pixel
  blocks.forEach((block) => { 
    block.addEventListener("mouseover", (e) => {
      e.target.classList.remove("box"); // Remove the light class
      e.target.classList.add("dark"); // Add the dark class which makes the pixel black
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
