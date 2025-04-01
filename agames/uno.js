const colors = ["red", "blue", "green", "yellow"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Skip", "Reverse", "+2"];
let playerHand = [], aiHand = [], deck = [];
let discardPile = [];

function createDeck() {
    let newDeck = [];
    colors.forEach(color => {
        numbers.forEach(num => {
            newDeck.push({ color, num });
            if (num !== "0") newDeck.push({ color, num }); // Each number appears twice except 0
        });
    });
    return newDeck.sort(() => Math.random() - 0.5);
}

function dealCards() {
    for (let i = 0; i < 7; i++) {
        playerHand.push(deck.pop());
        aiHand.push(deck.pop());
    }
    discardPile.push(deck.pop());
}

function drawCard(hand) {
    if (deck.length === 0) {
        deck = discardPile.splice(0, discardPile.length - 1).sort(() => Math.random() - 0.5);
    }
    hand.push(deck.pop());
    renderCards();
}

document.getElementById("draw-card").addEventListener("click", () => {
    drawCard(playerHand);
    aiTurn();
});

function renderCards() {
    const playerCardsDiv = document.getElementById("player-cards");
    playerCardsDiv.innerHTML = "";
    playerHand.forEach((card, index) => {
        let cardDiv = document.createElement("div");
        cardDiv.className = `card ${card.color}`;
        cardDiv.innerText = `${card.color} ${card.num}`;
        cardDiv.onclick = () => playCard(index);
        playerCardsDiv.appendChild(cardDiv);
    });
    document.getElementById("top-card").innerText = `${discardPile[discardPile.length - 1].color} ${discardPile[discardPile.length - 1].num}`;
}

function playCard(index) {
    let selectedCard = playerHand[index];
    let topCard = discardPile[discardPile.length - 1];
    if (selectedCard.color === topCard.color || selectedCard.num === topCard.num) {
        discardPile.push(playerHand.splice(index, 1)[0]);
        renderCards();
        checkWin();
        aiTurn();
    }
}

function aiTurn() {
    let playableCards = aiHand.filter(card => card.color === discardPile[discardPile.length - 1].color || card.num === discardPile[discardPile.length - 1].num);
    if (playableCards.length > 0) {
        let aiCard = playableCards[0];
        discardPile.push(aiCard);
        aiHand.splice(aiHand.indexOf(aiCard), 1);
    } else {
        drawCard(aiHand);
    }
    document.getElementById("ai-count").innerText = aiHand.length;
    checkWin();
}

function checkWin() {
    if (playerHand.length === 0) {
        alert("You Win!");
    } else if (aiHand.length === 0) {
        alert("AI Wins!");
    }
}

deck = createDeck();
dealCards();
renderCards();
