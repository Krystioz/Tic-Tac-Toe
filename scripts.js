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

const square = document.querySelectorAll(".pole");
const restart = document.querySelector("button");
const resultTah = document.querySelector(".result");

function handleReset() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].state = "empty";
        if ((cells[i].state = "empty")) {
            square[i].textContent = "";
        }
    }
}

square.forEach((element) => {
    element.addEventListener("click", (event) => {
        let cellNumber = event.target.className.slice(0, 1);
        // let cellClass = event.target.className.slice(2, 7);
        cells[cellNumber - 1].state = "x";
        if (event.target.textContent) {
            return;
        }
        resultTah.textContent = "";
        computerMove();
        render();
        checkForWin();
        checkDraw();
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
    }
);

//print text content of cells object to html squares
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

//computer moves on random empty cell

function computerMove() {
    let random = randomZeroToEight();
    let howMuchEmpty = cells.filter(
        (cell) => cell.state == "empty"
    );
    if (howMuchEmpty.length <= 1) {
        return;
    } else if (cells[random].state == "empty") {
        cells[random].state = "o";
    } else if (cells[random].state == "x") {
        computerMove();
    } else if (cells[random].state == "o") {
        computerMove();
    }
}

function randomZeroToEight() {
    return Math.floor(Math.random() * 8);
}

function checkForWin() {
    let isWin;
    for (let i = 0; i < cells.length; i++) {
        if (
            cells[0].state == "x" &&
            cells[1].state == "x" &&
            cells[2].state == "x"
        ) {
            resultTah.textContent = "Wygrałeś !";
            handleReset();
        } else if (
            cells[6].state == "x" &&
            cells[7].state == "x" &&
            cells[8].state == "x"
        ) {
            resultTah.textContent = "Wygrałeś !";
            handleReset();
        } else if (
            cells[3].state == "x" &&
            cells[4].state == "x" &&
            cells[5].state == "x"
        ) {
            resultTah.textContent = "Wygrałeś !";
            handleReset();
        } else if (
            cells[0].state == "x" &&
            cells[3].state == "x" &&
            cells[6].state == "x"
        ) {
            resultTah.textContent = "Wygrałeś !";
            handleReset();
        } else if (
            cells[1].state == "x" &&
            cells[4].state == "x" &&
            cells[7].state == "x"
        ) {
            resultTah.textContent = "Wygrałeś !";
            handleReset();
        } else if (
            cells[2].state == "x" &&
            cells[5].state == "x" &&
            cells[8].state == "x"
        ) {
            resultTah.textContent = "Wygrałeś !";
            handleReset();
        } else if (
            cells[0].state == "x" &&
            cells[4].state == "x" &&
            cells[8].state == "x"
        ) {
            resultTah.textContent = "Wygrałeś !";
            handleReset();
        } else if (
            cells[2].state == "x" &&
            cells[3].state == "x" &&
            cells[6].state == "x"
        ) {
            resultTah.textContent = "Wygrałeś !";
            handleReset();
        }
    }
}

function checkDraw() {
    for (let i = 0; i < cells.length; i++) {
        if (
            cells[0].state != "empty" &&
            cells[1].state != "empty" &&
            cells[2].state != "empty" &&
            cells[3].state != "empty" &&
            cells[4].state != "empty" &&
            cells[5].state != "empty" &&
            cells[6].state != "empty" &&
            cells[7].state != "empty" &&
            cells[8].state != "empty"
        ) {
            resultTah.textContent = "Remis !";
            handleReset();
        }
    }
}

function checkForWin() {
    let isWin;
    for (let i = 0; i < cells.length; i++) {
        if (
            cells[0].state == "o" &&
            cells[1].state == "o" &&
            cells[2].state == "o"
        ) {
            resultTah.textContent = "Przegrałeś !";
            handleReset();
        } else if (
            cells[6].state == "o" &&
            cells[7].state == "o" &&
            cells[8].state == "o"
        ) {
            resultTah.textContent = "Przegrałeś !";
            handleReset();
        } else if (
            cells[3].state == "o" &&
            cells[4].state == "o" &&
            cells[5].state == "o"
        ) {
            resultTah.textContent = "Przegrałeś !";
            handleReset();
        } else if (
            cells[0].state == "o" &&
            cells[3].state == "o" &&
            cells[6].state == "o"
        ) {
            resultTah.textContent = "Przegrałeś !";
            handleReset();
        } else if (
            cells[1].state == "o" &&
            cells[4].state == "o" &&
            cells[7].state == "o"
        ) {
            resultTah.textContent = "Przegrałeś !";
            handleReset();
        } else if (
            cells[2].state == "o" &&
            cells[5].state == "o" &&
            cells[8].state == "o"
        ) {
            resultTah.textContent = "Przegrałeś !";
            handleReset();
        } else if (
            cells[0].state == "x" &&
            cells[4].state == "x" &&
            cells[8].state == "x"
        ) {
            resultTah.textContent = "Przegrałeś !";
            handleReset();s
        } else if (
            cells[2].state == "x" &&
            cells[3].state == "x" &&
            cells[6].state == "x"
        ) {
            resultTah.textContent = "Przegrałeś !";
            handleReset();
        }
    }
}
