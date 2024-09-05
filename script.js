const container = document.querySelector(".container");
const otherBtn = document.querySelector("#otherBtn");
const btn = document.querySelector("#btn")

function createGrid(num) {
  
  for(let i = 0; i < num*num; i++) {

    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = `calc(960px/${num})`;
    div.style.height = `calc(960px/${num})`;
    
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "red";
    });
    container.appendChild(div);
  }
}

createGrid(16)

btn.addEventListener("click", () => {
  num = parseInt(prompt("Enter number lower than 100"));
    if (num >= 2 && num <= 100) {
        createGrid(num);
    } else {
        alert("Try a different number.");
        location.reload()
    }
  deleteGrid();
  createGrid(num);
});

function clearBoard() {
  const wholeGrid = document.querySelectorAll(".grid");
  wholeGrid.forEach((div)=>{
    div.style.backgroundColor = "rgb(221, 179, 211)";
  });
}

otherBtn.addEventListener("click", clearBoard);

function deleteGrid() {
  while(container.hasChildNodes() ){
    container.removeChild(container.lastChild);
  }
}