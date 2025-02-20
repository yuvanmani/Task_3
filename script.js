const ground = document.getElementById("grid");
const rotate = document.getElementById("recycle");
console.log(rotate);


const cardCollection = [
    {
        name: "king1",
        img: "assets/king1.jpg"
    },
    {
        name: "queen1",
        img: "assets/queen1.jpg"
    },
    {
        name: "seven1",
        img: "assets/seven1.jpg"
    },
    {
        name: "king1",
        img: "assets/king1.jpg"
    },
    {
        name: "queen1",
        img: "assets/queen1.jpg"
    },
    {
        name: "seven1",
        img: "assets/seven1.jpg"
    }
]


function shuffle() {
    cardCollection.sort(() => 0.5 - Math.random())
}
shuffle()

// const new1 = [];
function playGround() {
    
    for (let i = 0; i < cardCollection.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "assets/empty.jpg");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        ground.append(card)

        // new1.push(card);
    }

}
playGround()


let cardSelected = [];
let cardSelectedPosition = [];


function flipCard() {
    const cardFlow = this.getAttribute("data-id");
    this.setAttribute("src", cardCollection[cardFlow].img)
    cardSelectedPosition.push(cardFlow);
    cardSelected.push(cardCollection[cardFlow].name);

    if (cardSelected.length === 2) {
        setTimeout(matching, 500);
    }
}

function matching() {
    const cards = document.querySelectorAll("img");
    console.log(cardSelected[0]);
    console.log(cardSelected[1]);

    if (cardSelected[0] == cardSelected[1]) {
        cards[cardSelectedPosition[0]].setAttribute("src", cardCollection[cardSelected[0]].img);
        cards[cardSelectedPosition[1]].setAttribute("src", cardCollection[cardSelected[1]].img);
    } else {
        cards[cardSelectedPosition[0]].setAttribute("src", "assets/empty.jpg");
        cards[cardSelectedPosition[1]].setAttribute("src", "assets/empty.jpg");

    }
    cardSelected = [];
    cardSelectedPosition = [];
    shuffle();
}
function reset() {
    ground.innerHTML = " ";
    shuffle();
    playGround();
}
rotate.addEventListener("click", reset);
