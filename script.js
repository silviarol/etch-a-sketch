const container = document.querySelector(".container");

let gridValue = 16

for(let i = 0; i < gridValue*gridValue; i++) {

    const div = document.createElement("div");
    div.style.cssText = "border: 1px solid black; height: 60px; width: 60px"; 
    div.classList.add("grid");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "red";
    });
    container.appendChild(div);

}

let divList = document.querySelectorAll(".grid")

// let gridValue = prompt("Choose a value between 16 and 100");

/* function createGrid {
  
  for(let i = 0; i < gridValue*gridValue; i++) {

  const div = document.createElement("div");
  div.style.cssText = "border: 1px solid black; height: (960/gridValue)px; width: (960/gridValue)px"; 
  div.classList.add("grid");
  container.appendChild(div);

  }
}
 */