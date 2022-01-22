const cells = {
    pos11: "empty",
    pos12: "empty",
    pos13: "empty",
    pos21: "empty",
    pos22: "empty",
    pos23: "empty",
    pos31: "empty",
    pos32: "empty",
    pos33: "empty",
};
console.log(cells);
const square = document.querySelectorAll(".pole");
const restart = document.querySelector("button");
console.log(square);

square.forEach((element) => {
    element.addEventListener("click", (event) => {
        let cellClass = event.target.className.slice(0, 5);
        console.log(cellClass);
        console.log(event.target.className);
    });
});

restart.addEventListener("click", (event) => {
    square.forEach((elem) => {
        elem.innerHTML = "";
    });
});
