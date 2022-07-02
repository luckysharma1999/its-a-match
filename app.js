document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "banana",
      img: "images/banana.jpg",
    },
    {
      name: "car",
      img: "images/car.png",
    },
    {
      name: "cat",
      img: "images/cat.jpg",
    },
    {
      name: "dogo",
      img: "images/dogo.jpg",
    },
    {
      name: "face",
      img: "images/face.jpg",
    },
    {
      name: "monster",
      img: "images/monster.jpg",
    },
    {
      name: "banana",
      img: "images/banana.jpg",
    },
    {
      name: "car",
      img: "images/car.png",
    },
    {
      name: "cat",
      img: "images/cat.jpg",
    },
    {
      name: "dogo",
      img: "images/dogo.jpg",
    },
    {
      name: "face",
      img: "images/face.jpg",
    },
    {
      name: "monster",
      img: "images/monster.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/cover.jpg");
      card.setAttribute("image-id", i);
      card.addEventListener("click", revealCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const firstOption = cardsChosenId[0];
    const secondOption = cardsChosenId[1];

    if (firstOption == secondOption) {
      cards[firstOption].setAttribute("src", "images/cover.jpg");
      cards[secondOption].setAttribute("src", "images/cover.jpg");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[firstOption].setAttribute("src", "images/white.png");
      cards[secondOption].setAttribute("src", "images/white.png");
      cards[firstOption].removeEventListener("click", revealCard);
      cards[secondOption].removeEventListener("click", revealCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[firstOption].setAttribute("src", "images/cover.jpg");
      cards[secondOption].setAttribute("src", "images/cover.jpg");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  //flip your card
  function revealCard() {
    let cardId = this.getAttribute("image-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
