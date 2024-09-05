const container = document.querySelector(".container");

for(let i = 0; i <=256; i++) {

    const div = document.createElement("div");
    div.style.width = "40px";
    div.style.height = "40px";
    div.style.border = "solid black 2px"
    div.classList.add("grid");
    container.appendChild(div);

}
