const container = document.querySelector(".container");

const divOne = document.createElement("div");
divOne.style.backgroundColor = "white";
divOne.style.border = "solid black 3px";
divOne.style.width = "40px";
divOne.style.height = "40px";

const divTwo = document.createElement("div");
divTwo.style.backgroundColor = "white";
divTwo.style.border = "solid black 3px";
divTwo.style.width = "40px";
divTwo.style.height = "40px";

container.appendChild(divOne);
container.appendChild(divTwo);