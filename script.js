const container = document.querySelector(".container");

for(let i = 0; i <257; i++) {

    const div = document.createElement("div");
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px"; 
    div.classList.add("grid");
    container.appendChild(div);

}

let divList = document.querySelectorAll(".grid")

divList.forEach((div) => {

    div.addEventListener("click", () => {
      div.style.backgroundColor = "red";
    });
  });

divList.forEach((div) => {

    div.addEventListener("dblclick", () => {
      div.style.backgroundColor = "white";
    });
  });

