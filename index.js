
const fastFood1 = document.querySelector(".fast-food-1");
const fastFood2 = document.querySelector(".fast-food-2");
const fastFood3 = document.querySelector(".fast-food-3");
const ditto = document.querySelector(".ditto");

// GameBoard dimensions
const gameBoardWidth = document.querySelector(".game-board").clientWidth;
const gameBoardHeight = document.querySelector(".game-board").clientHeight;
const gameBoardElement = document.querySelector(".game-board");

// init Ditto
const dittoWidth = ditto.clientWidth;
const dittoHeight = ditto.clientHeight;
let positionYDitto = 300;
let positionXDitto = 50;
let speedDitto = 10;
let dittoHealth = 3

// init FastFood 1
let positionYFastFood1 = 0;
let positionXFastFood1 = 0;
let speedFastFood1 = 3;

// init FastFood 2
let positionYFastFood2 = 0;
let positionXFastFood2 = 0;
let speedFastFood2 = 5;

// init FastFood 3
let positionYFastFood3 = 0;
let positionXFastFood3 = 0;
let speedFastFood3 = 7;


// controlling Ditto inside the GameBoard
function moveDitto(event) {
    if (event.key === "ArrowUp") {
        if (positionYDitto - speedDitto >= 0) {
            positionYDitto -= speedDitto;
        }
    } else if (event.key === "ArrowDown") {
        if (positionYDitto + dittoHeight + speedDitto <= gameBoardHeight) {
            positionYDitto += speedDitto;
        }
    } else if (event.key === "ArrowLeft") {
        if (positionXDitto - speedDitto >= 0) {
            positionXDitto -= speedDitto;
        }
    } else if (event.key === "ArrowRight") {
        if (positionXDitto + dittoWidth + speedDitto <= gameBoardWidth) {
            positionXDitto += speedDitto;
        }
    }

    ditto.style.top = `${positionYDitto}px`;
    ditto.style.left = `${positionXDitto}px`;
}

// playing with Ditto movement
document.addEventListener("keydown", moveDitto);

// checking if DITTO is EATING FAST FOOD!

function dittoIsEating() {
    if (0 < positionXFastFood1 + fastFood1.clientWidth &&
        0 + ditto.clientWidth > positionXFastFood1 &&
        positionYDitto < positionYFastFood1 + fastFood1.clientHeight &&
        positionYDitto + ditto.clientHeight > positionYFastFood1) {
        dittoHealth-- 
    }
    console.log("Ditto is Eating");
}

