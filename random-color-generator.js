let btn = document.querySelector("button");

function RandomColorGen() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let colors = ` RGB(${red}, ${green}, ${blue})`;
    return colors;
};

btn.addEventListener("click", function() {
    let h3 = document.querySelector("h3");
    let randomColor = RandomColorGen();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor= randomColor;
});