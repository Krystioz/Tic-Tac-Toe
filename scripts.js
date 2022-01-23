const cells = [
    { id: 1, state: "empty" },
    { id: 2, state: "empty" },
    { id: 3, state: "empty" },
    { id: 4, state: "empty" },
    { id: 5, state: "empty" },
    { id: 6, state: "empty" },
    { id: 7, state: "empty" },
    { id: 8, state: "empty" },
    { id: 9, state: "empty" },
];
console.log(cells);
const square = document.querySelectorAll(".pole");
const restart = document.querySelector("button");
console.log(square);

square.forEach((element) => {
    element.addEventListener("click", (event) => {
        let cellNumber = event.target.className.slice(0, 1);
        // let cellClass = event.target.className.slice(2, 7);
        cells[cellNumber - 1].state = "x";
        computerMove();
        render();
    });
});

//resets content of each cell
restart.addEventListener(
    "click",
    function handleReset(event) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].state = "empty";
            if ((cells[i].state = "empty")) {
                square[i].textContent = "";
            }
        }
        // cells.forEach((elem) => (elem.state = "empty"));
    }
);

function render() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].state == "x") {
            square[i].textContent = "x";
        }
        if (cells[i].state == "o") {
            square[i].textContent = "o";
        }
    }
}

function computerMove() {
    let random = randomZeroToEight();
    if (cells[random].state == "empty") {
        cells[random].state = "o";
    } else if (cells[random].state == "x") {
        console.log(`occupied by x ${random}`);
    } else if (cells[random].state == "o") {
        console.log(`occupied by o ${random}`);
    }
}

function randomZeroToEight() {
    return Math.floor(Math.random() * 8);
}
