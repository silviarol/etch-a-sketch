const container = document.querySelector(".container");
const otherBtn = document.querySelector("#otherBtn");
const btn = document.querySelector("#btn");
const rainbow = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");

function createGrid(num) {
  
  for(let i = 0; i < num*num; i++) {

    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = `calc(960px/${num})`;
    div.style.height = `calc(960px/${num})`;
    
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "white";
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
    div.style.backgroundColor = "black";
  });
}

otherBtn.addEventListener("click", clearBoard);

function deleteGrid() {
  while(container.hasChildNodes() ){
    container.removeChild(container.lastChild);
  }
}


function clickChangeBg() {

    const cells = document.querySelectorAll('.grid');
    cells.forEach(div => {
        div.addEventListener('mouseover', () => {
          div.style.backgroundColor = `rgb(${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )})`;
        });
    
    })
  }

rainbow.addEventListener("click", clickChangeBg);

function eraseGrid() {

  const cells = document.querySelectorAll('.grid');
  cells.forEach(div => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
  })
}

eraser.addEventListener("click", eraseGrid);